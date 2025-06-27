import { motion } from "framer-motion";
import { FaRegHeart, FaSearch, FaClipboardList } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className=" bg-base  py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          About <span className="text-primary">Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg  mb-10 max-w-3xl mx-auto"
        >
          Welcome to <span className="font-semibold text-primary">Food Khazana</span> — the ultimate recipe book app where you can manage, discover, like, and save your favorite dishes. Cook smarter, eat better!
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
          >
            <FaClipboardList className="text-3xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Manage Recipes</h3>
            <p className="text-sm text-white ">
              Create, edit, and organize all your cooking ideas in one simple dashboard.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
          >
            <FaSearch className="text-3xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Discover New Recipes</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Explore a wide range of recipes shared by the community from around the globe.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
          >
            <FaRegHeart className="text-3xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Like & Wishlist</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Like your favorite recipes and save them to your personal wishlist.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <a
            href="/all-recipes"
            className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary/90 transition"
          >
            🍲 Explore Recipes
          </a>
        </motion.div>

        {/* Closing Line */}
        <p className="mt-10  text-sm">
          Join thousands of foodies. Discover the <span className="text-primary font-medium">Khazana of Flavors</span> today!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
