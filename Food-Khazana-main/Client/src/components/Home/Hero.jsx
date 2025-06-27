import React from "react";
import { FaUtensils, FaHeart, FaPenNib } from "react-icons/fa";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip } from 'react-tooltip';
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[556px] max-h-screen rounded-b-2xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/rfMX0KHW/image.png)",
        }}
      >
        <div className="hero-overlay bg-black/70 bg-opacity-50 rounded-b-2xl" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl ">
            <div className="h-40">
              <h1 className="mb-5 text-5xl md:text-6xl font-bold">
                Food KhaZana <br />
                <span>
                  <Typewriter
                    words={[
                      "Discover Recipes 🍲",
                      "Add Recipes 🍔",
                      "Share Happiness! 😍",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <br />
            </div>

            <p className="mb-5 text-lg mt-6 ">
              Explore, save, and share your favorite recipes all in one place.
              Your cooking journey starts here!
            </p>
            <Link to="/all-recipes">
              <button className="btn btn-primary">Browse Recipes</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Highlights Section */}
      <div className="py-12 bg-base-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">What You Can Do Here?</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto px-4">
          {/* C-1 */}
          <div className="card border border-primary bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
            <FaUtensils className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Discover Recipes</h3>
            <p className="mt-2">
              Browse a wide collection of delicious recipes with detailed steps
              and ingredient lists.
            </p>
          </div>

          {/* C-2 */}
          <div className="card border border-primary bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
            <FaHeart className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Save Your Favorites</h3>
            <p className="mt-2 ">
              Bookmark recipes you love so you can easily find and cook them
              again anytime.
            </p>
          </div>

          {/* C-3 */}
          <div className="card border border-primary bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
            <FaPenNib className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Share Your Creations</h3>
            <p className="mt-2 ">
              Upload your own recipes and inspire others with your unique
              culinary creations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
