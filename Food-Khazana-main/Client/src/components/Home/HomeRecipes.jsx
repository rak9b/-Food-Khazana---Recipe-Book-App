import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const HomeRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://food-khazana-server.vercel.app/top-liked-recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Loading Recipes Failed!",
          footer: err.message,
          timer: 2000,
        });
        setLoading(false);
      });
  }, []);

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

  const limitedRecipes = recipes.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold my-6 text-center text-primary">
        🍽️ Popular Recipes 🍽️
      </h2>
      <h3 className="text-base font-bold  my-3 text-center text-accent">
        Our Recipes that our users liked. Check the details hope you will like
        too...
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {limitedRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="card border-2 border-primary bg-base-100 shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <figure className="px-6 pt-6">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-xl h-40 object-cover w-full border border-primary"
              />
            </figure>
            <div className="card-body space-y-2">
              <h2 className="card-title text-xl font-bold">{recipe.title}</h2>
              <p>
                <strong>Cuisine:</strong> {recipe.cuisine}
              </p>
              <p>
                <strong>Time:</strong> {recipe.time} mins
              </p>
              <p
                className="flex items-center gap-1 text-pink-600 font-semibold"
              >
                <FaHeart data-tooltip-id="loved-tooltip"
                data-tooltip-content="Peoples loved"
                data-tooltip-delay-show={500} /> {recipe.likes}
                <Tooltip id="loved-tooltip" place="right-start" />
              </p>

              <div className="card-actions justify-end mt-4">
                <button
                data-tooltip-id="details-tooltip"
                    data-tooltip-content="Click to view Details"
                    data-tooltip-delay-show={500}
                  onClick={() => navigate(`/recipe-details/${recipe._id}`)}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  View Details
                  <Tooltip id="details-tooltip" place="bottom" />

                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-8">
        <button
          data-tooltip-id="all-tooltip"
          data-tooltip-content="Click to see all the Recipes!"
          data-tooltip-delay-show={500}
          onClick={() => navigate("/all-recipes")}
          className="btn btn-primary shadow"
        >
          See All Recipes
        </button>
        <Tooltip id="all-tooltip" place="top" />
      </div>
    </div>
  );
};

export default HomeRecipes;
