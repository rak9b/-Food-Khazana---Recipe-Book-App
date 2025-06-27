import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://food-khazana-server.vercel.app/all-recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipe:", err);
        Swal.fire("Error", "Could not load recipe!", "error");
        setLoading(false);
        navigate("/my-recipes");
      });
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-base-200">
        <div className="text-center space-y-3">
          <span className="loading loading-bars loading-lg text-primary"></span>
          <p className="text-xl font-semibold  text-yellow-800">
            Loading Please Wait...
          </p>
        </div>
      </div>
    );
  }

  if (!recipe || !recipe.title) {
    return (
      <div className="text-center mx-10 text-2xl font-bold text-red-600">
        Recipe not found!
      </div>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      steps: form.steps.value,
      cuisine: form.cuisine.value,
      time: form.time.value,
      categories: Array.from(form.categories)
        .filter((input) => input.checked)
        .map((input) => input.value),
    };

    fetch(`https://food-khazana-server.vercel.app/update-recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Recipe updated!", "success");
          navigate("/my-recipes");
        }else{
            Swal.fire("Error", "Make Change to Update!", "error");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-base-200 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        Update Recipe
      </h2>
      <form className="space-y-5" onSubmit={handleUpdate}>
        <div>
          <label className="label font-semibold">Image URL</label>
          <input
            name="image"
            type="text"
            defaultValue={recipe.image}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label font-semibold">Title</label>
          <input
            name="title"
            type="text"
            defaultValue={recipe.title}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label font-semibold">Ingredients</label>
          <textarea
            name="ingredients"
            defaultValue={recipe.ingredients}
            className="textarea textarea-bordered w-full"
          />
        </div>

        <div>
          <label className="label font-semibold">Instructions</label>
          <textarea
            name="steps"
            defaultValue={recipe.steps}
            className="textarea textarea-bordered w-full"
          />
        </div>

        <div>
          <label className="label font-semibold">Cuisine</label>
          <select
            name="cuisine"
            className="select select-bordered w-full"
            required
            defaultValue={recipe.cuisine}
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
            name="time"
            type="number"
            defaultValue={recipe.time}
            className="input input-bordered w-full"
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
                    name="categories"
                    value={cat}
                    defaultChecked={recipe.categories?.includes(cat)}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">{cat}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-full" type="submit">
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRecipe;
