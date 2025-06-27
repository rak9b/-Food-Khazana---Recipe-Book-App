import React from 'react';

const Terms = () => {
  return (
    <div className=" min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto border border-primary rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-primary text-center">Terms and Conditions</h1>

        <p className="text-base mb-4">
          Welcome to <strong>Food Khazana</strong>. By accessing or using our website, services, or applications, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using the platform.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">1. Use of the Website</h2>
        <p className="text-base mb-4">
          You agree to use Food Khazana responsibly and only for lawful purposes. Any misuse of the platform—such as submitting inappropriate content, attempting unauthorized access, or disrupting services—is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">2. User Accounts</h2>
        <p className="text-base mb-4">
          When you create an account, you are responsible for maintaining the confidentiality of your login credentials. You are also accountable for all activities that occur under your account. Please notify us immediately if you suspect unauthorized use.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">3. Recipes & Content</h2>
        <p className="text-base mb-4">
          Users may share and discover recipes. You must ensure that the content you submit is original, accurate, and does not infringe on any third-party rights. Food Khazana reserves the right to remove any content that violates our guidelines or policies.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">4. Intellectual Property</h2>
        <p className="text-base mb-4">
          All content, branding, graphics, and design elements on Food Khazana are the property of Food Khazana unless otherwise noted. You may not copy, reuse, or distribute any content without written permission.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">5. Termination of Access</h2>
        <p className="text-base mb-4">
          We may suspend or terminate your account at our discretion if you breach these Terms and Conditions or misuse the platform in any way.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">6. Changes to Terms</h2>
        <p className="text-base mb-4">
          Food Khazana may update these Terms periodically. Continued use of the platform indicates your acceptance of any changes. We recommend reviewing this page from time to time.
        </p>

        <h2 className="text-xl font-semibold text-accent mt-6 mb-2">7. Contact Information</h2>
        <p className="text-base mb-4">
          For questions or concerns about these Terms, please contact us at <a href="mailto:support@foodkhazana.com" className="text-primary underline">support@foodkhazana.com</a>.
        </p>

        <p className="text-accent-content text-sm mt-6">Last updated: June 26, 2025</p>
      </div>
    </div>
  );
};

export default Terms;
