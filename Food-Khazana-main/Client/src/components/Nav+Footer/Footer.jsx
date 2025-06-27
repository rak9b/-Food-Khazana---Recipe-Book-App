import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-8 px-4 shadow-inner transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Copyright */}
        <div>
          <div className="flex items-center justify-center md:justify-start">
            <img src="images/treasure.png" alt="logo" className="h-10 w-10" />
            <h2 className="text-3xl font-bold ml-2">
              Food <span className="text-primary">Khazana</span>
            </h2>
          </div>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} FoodKhazana. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <div className="mt-4 flex flex-col items-center md:items-start gap-1 text-sm">
            <a href="/contact-us" className="hover:underline hover:text-primary transition">📞 Contact Us</a>
            <a href="/terms" className="hover:underline hover:text-primary transition">📄 Terms & Conditions</a>
            <a href="/privacy-policy" className="hover:underline hover:text-primary transition">🔒 Privacy Policy</a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500 transition-transform hover:scale-125" />
            </a>
            <a href="https://x.com" target="_blank" aria-label="X" rel="noreferrer">
              <FaTwitter className="hover:text-blue-300 transition-transform hover:scale-125" />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-125" />
            </a>
            <a href="mailto:support@foodkhazana.com" target="_blank" aria-label="Email" rel="noreferrer">
              <FaEnvelope className="hover:text-red-500 transition-transform hover:scale-125" />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
