import React from 'react';

const Privacy = () => {
  return (
    <div className=" min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto border border-primary  rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary text-center">
          🍴 Privacy Policy - Food Khazana
        </h1>

        <p className="text-base mb-4">
          At <strong>Food Khazana</strong>, your privacy is our top priority. This policy outlines how we collect, use, and protect your data while you explore, create, and save recipes using our app.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-base mb-4">
          <li>Name, email address, and profile picture (especially if you log in via Google)</li>
          <li>Recipe submissions, saved favorites, and wishlist items</li>
          <li>Login and authentication details (e.g., Firebase auth tokens)</li>
        </ul>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-base mb-4">
          We use your data to personalize your experience—showing your favorite recipes, recommending trending dishes, and helping you manage your recipe collection smoothly.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">3. Sharing Your Information</h2>
        <p className="text-base mb-4">
          We never sell your personal data. We only share information with essential and secure third-party services like Firebase for authentication and database operations.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">4. Data Security</h2>
        <p className="text-base mb-4">
          We use industry-standard security practices to protect your data. Still, remember—no system is completely immune, so always protect your credentials.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">5. Your Control</h2>
        <p className="text-base mb-4">
          You can update your profile info, manage your recipes, or delete your account anytime. We believe in giving you full control over your digital kitchen!
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">6. Policy Updates</h2>
        <p className="text-base mb-4">
          We may update this Privacy Policy occasionally. When we do, we'll inform you via email or notify you within the app.
        </p>

        <p className="text-gray-600 text-sm mt-6 text-center">
          Last updated: June 26, 2025
        </p>
      </div>
    </div>
  );
};

export default Privacy;
