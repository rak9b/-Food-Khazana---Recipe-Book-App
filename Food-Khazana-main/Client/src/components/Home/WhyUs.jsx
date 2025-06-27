import React from 'react';
import { FaLeaf, FaClock, FaHeart, FaStar } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="bg-base-200 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Food Khazana?</h2>
        <p className=" mb-10 text-lg max-w-3xl mx-auto text-accent">
          Discover the magic of authentic recipes from around the world. Food Khazana is more than just a recipe site — it's a global kitchen of flavors, tips, and delicious stories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 card border border-primary rounded-xl shadow hover:shadow-md transition">
            <FaLeaf className="text-green-500 text-4xl mx-auto mb-4 animate-bounce hover:scale-110 transition duration-300" />
            <h4 className="font-bold text-xl mb-2">Fresh & Authentic</h4>
            <p>We feature recipes made with love and tradition, directly from home chefs.</p>
          </div>

          <div className="p-6 card border border-primary rounded-xl shadow hover:shadow-md transition">
            <FaClock className="text-yellow-500 text-4xl mx-auto mb-4 animate-spin hover:scale-110 transition duration-300" />
            <h4 className="font-bold text-xl mb-2">Quick & Easy</h4>
            <p>No long waits — find recipes that are both fast and fabulous.</p>
          </div>

          <div className="p-6 card border border-primary rounded-xl shadow hover:shadow-md transition">
            <FaHeart className="text-red-500 text-4xl mx-auto mb-4 animate-pulse hover:scale-110 transition duration-300" />

            <h4 className="font-bold text-xl mb-2">Loved by Community</h4>
            <p>Our recipes are tried, tested, and loved by thousands of foodies.</p>
          </div>

          <div className="p-6 card border border-primary rounded-xl shadow hover:shadow-md transition">
            <FaStar className="text-blue-500 text-4xl mx-auto mb-4 hover:rotate-12 hover:scale-110 transition duration-300" />
            <h4 className="font-bold text-xl mb-2">Highly Rated Recipes</h4>
            <p>Only the best — our top-rated recipes will never let you down.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
