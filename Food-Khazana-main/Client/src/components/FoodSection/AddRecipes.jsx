import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const AddRecipes = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const recipeData = {
      image: formData.get("image"),
      title: formData.get("title"),
      ingredients: formData.get("ingredients"),
      steps: formData.get("steps"),
      cuisine: formData.get("cuisine"),
      time: formData.get("time"),
      categories: formData.getAll("categories"),
      likes: 0,
      email: user?.email,
    };

    fetch("https://food-khazana-server.vercel.app/add-recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Recipe added successfully!",
            showConfirmButton: false,
            timer: 2000,
          });
          e.target.reset();
        } else {
          Swal.fire({
            icon: "warning",
            title: "Something went wrong!",
            text: "Recipe could not be added.",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding recipe:", error);
        Swal.fire({
          icon: "error",
          title: "Server Error",
          text: "Failed to connect to the server. Please try again later.",
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-base-200 rounded-2xl shadow-md">
      <div className="text-center mb-8">
  <h1 className="text-4xl font-bold text-primary">
    Share Your Special Recipe 🤩
  </h1>
  <p className="text-lg mt-2 text-accent">
    Add your favorite recipe to our collection and inspire other food lovers with your delicious creations!
  </p>
</div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="label font-semibold">Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            name="image"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            placeholder="Recipe title"
            className="input input-bordered w-full"
            name="title"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Ingredients</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="List ingredients, separated by commas"
            name="ingredients"
            required
          ></textarea>
        </div>

        <div>
          <label className="label font-semibold">Instructions</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Write preparation steps..."
            name="steps"
            required
          ></textarea>
        </div>

        <div>
          <label className="label font-semibold">Cuisine Type</label>
          <select
            name="cuisine"
            className="select select-bordered w-full"
            required
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select cuisine
            </option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className="label font-semibold">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            placeholder="e.g. 30"
            className="input input-bordered w-full"
            name="time"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Categories</label>
          <div className="flex flex-wrap gap-4">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
              (cat, i) => (
                <label className="label cursor-pointer gap-2" key={i}>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    name="categories"
                    value={cat}
                  />
                  <span className="label-text">{cat}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-full" type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipes;
