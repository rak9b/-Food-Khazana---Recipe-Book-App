import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { BsEmojiTear } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Auth/AuthContext";

const FoodDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://food-khazana-server.vercel.app/recipe-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleLike = () => {
    const newLike = recipe.likes + 1;

    fetch(`https://food-khazana-server.vercel.app/like-recipe/${recipe._id}`, {
      method:'PATCH',
      headers: {
        'Content-Type' : 'application/json',
      },
      body :  JSON.stringify({likes : newLike}),
    })
    .then(res => res.json())
    .then(data=>{
      if(data.modifiedCount){
        setRecipe({...recipe, likes: newLike});
      }
    })
    .catch((err)=>{
      console.log("error updating", err);
    })
  }
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-base-200">
        <div className="text-center space-y-3">
          <span className="loading loading-bars loading-lg text-primary"></span>
          <p className="text-xl font-semibold  text-yellow-800">Loading<br />
             Please Wait...</p>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center my-20 text-red-500 font-extrabold text-4xl">
        <div className="text-6xl flex justify-center mb-2">
          <BsEmojiTear />
        </div>
        Recipe not found!
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-xl shadow-xl"
        />

        <div className="mt-8 space-y-4 text-gray-700 text-lg">
          <p>
            <span className="font-bold text-purple-500">Cuisine:</span> <span className='text-accent' >{recipe.cuisine}</span> 
          </p>
          <p>
            <span className="font-bold text-blue-500">Prep Time:</span> <span className='text-accent' >{recipe.time} mins</span> 
          </p>
          <p>
            <span className="font-bold text-red-500">Likes:</span> <span className='text-accent' >{recipe.likes}</span>
          </p>
          <p>
            <span className="font-bold text-green-500">Categories:</span>{" "}
             <span className='text-accent' >{(recipe.categories || []).join(", ")}</span>
          </p>
          <div>
            <span className="font-bold block mb-1 text-violet-500">Ingredients:</span>
            <p> <span className='text-accent' >{recipe.ingredients}</span> </p>
          </div>
          <div>
            <span className="font-bold block mb-1 text-orange-500">Instructions:</span>
            <p><span className='text-accent' >{recipe.steps}</span>
              </p>
              <div className="flex justify-center mt-6">
                <button data-tooltip-id="like-tooltip"
                    data-tooltip-content="Click to Like"
                    data-tooltip-delay-show={500}
                    disabled={user?.email === recipe.email}
                 onClick={() => handleLike()} className="btn  border-red-600 hover:text-white hover:bg-red-200"><FaHeart className='text-red-600 '/>{recipe.likes} </button>
                <Tooltip id="like-tooltip" place="right-start" />              
              </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
