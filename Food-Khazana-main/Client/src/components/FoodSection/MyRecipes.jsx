import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { FaHeart, FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    fetch("https://food-khazana-server.vercel.app/my-recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching recipes:", err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://food-khazana-server.vercel.app/del-recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                icon: "success",
                title: "Recipe Deleted successfully!",
                showConfirmButton: false,
                timer: 2000,
              });
              const newRecipes = recipes.filter((resi) => resi._id !== id);
              setRecipes(newRecipes);
            } else {
              Swal.fire("Failed!", "Recipe could not be deleted.", "error");
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-base-200">
        <div className="text-center space-y-3">
          <span className="loading loading-bars loading-lg text-primary"></span>
          <p className="text-xl font-semibold text-yellow-800">
            Loading... Please Wait
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
  <h1 className="text-4xl font-bold text-primary mt-10">
    Your Personal Recipe Collection 🍔
  </h1>
  <p className="text-lg mt-2 text-accent">
    Manage, edit, or delete the recipes you’ve shared. Keep track of your culinary creations in one place!
  </p>
</div>


      {Array.isArray(recipes) && recipes.length === 0 ? (
        <div className=" my-10 text-center mt-10 space-y-4">
          <p className="text-lg font-semibold">
            You haven’t added any recipes yet.
          </p>
          <button
            onClick={() => navigate("/add-recipes")}
            className="btn shadow btn-primary"
          >
            Add Recipe
          </button>
        </div>
      ) : (
        <div className=" my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="card border border-primary bg-base-100 shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
            >
              <figure className="px-6 pt-6">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-xl h-40 object-cover w-full border border-primary"
                />
              </figure>
              <div className="card-body space-y-2">
                <h2 className="card-title text-xl font-bold max-w-fit ">
                  {recipe.title}
                </h2>
                <p>
                  <b>Ingredients:</b> {recipe.ingredients}
                </p>
                <p>
                  <b>Instructions:</b> {recipe.steps}
                </p>
                <p>
                  <b>Cuisine:</b> {recipe.cuisine}
                </p>
                <p>
                  <b>Time:</b> {recipe.time} mins{" "}
                </p>
                <div className="flex flex-wrap gap-1">
                  {recipe.categories?.map((cat, i) => (
                    <span
                      key={i}
                      className="badge badge-info text-white text-xs"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <p className="flex items-center gap-1 text-pink-600 font-semibold">
                  <FaHeart /> {recipe.likes || 0}
                </p>

                <div className="card-actions justify-end mt-4">
                  <button
                    data-tooltip-id="edit-tooltip"
                    data-tooltip-content="Click to edit"
                    data-tooltip-delay-show={500}
                    onClick={() => navigate(`/update-recipe/${recipe._id}`)}
                    className="btn btn-sm btn-warning text-white"
                  >
                    <FaEdit />
                    <Tooltip id="edit-tooltip" place="bottom" />
                  </button>
                  <button
                    data-tooltip-id="delete-tooltip"
                    data-tooltip-content="Click to Delete"
                    data-tooltip-delay-show={500}
                    onClick={() => handleDelete(recipe._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    <Tooltip id="delete-tooltip" place="bottom" />
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
