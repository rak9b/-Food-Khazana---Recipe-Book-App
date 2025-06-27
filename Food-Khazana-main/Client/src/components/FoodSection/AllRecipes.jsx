import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  useEffect(() => {
    fetch("https://food-khazana-server.vercel.app/all-recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Loading Recipes Failed!",
          footer: error.message,
          timer: 2000,
        });
        setLoading(false);
      });
  }, []);

  const filteredRecipes =
    selectedCuisine === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.cuisine === selectedCuisine);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-base-200">
        <div className="text-center space-y-3">
          <span className="loading loading-bars loading-lg text-primary"></span>
          <p className="text-xl font-semibold text-yellow-800">
            Loading Recipes
            <br />
            Please Wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 my-4">
      <div className="text-center mb-8">
  <h1 className="text-4xl font-bold text-primary">
    Explore All Delicious Recipes
  </h1>
  <p className="text-lg mt-2 text-accent">
    Browse through all the recipes shared by our cooking community — find inspiration, discover favorites, and get cooking!
  </p>
</div>


      <div className="mb-6 text-center">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="All">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="card border border-primary rounded-2xl bg-base-100 shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <figure className="px-10 pt-10">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-xl border border-primary h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{recipe.title}</h2>
              <p className="text-sm">Cuisine: {recipe.cuisine}</p>
              <p className="text-sm">Time: {recipe.time} mins</p>
              <p className="text-sm">Likes: {recipe.likes || 0}</p>
              <div className="card-actions flex justify-center mt-2 items-center w-full">
                <Link
                  to={`/recipe-details/${recipe._id}`}
                  className="btn btn-primary"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
