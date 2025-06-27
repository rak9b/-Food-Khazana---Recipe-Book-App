import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const ContactUs = () => {
  return (

      <div className="min-h-[556px] bg-base-200 flex items-center justify-center px-4 py-10">
        <div className="card w-full max-w-3xl bg-base-100 shadow-xl p-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">🍽️ Get in Touch</h2>
          <p className="text-center text-accent mb-6">
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>456 Food Street, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaPhoneAlt className="text-primary" />
                <span>+880 1987 654321</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaEnvelope className="text-primary" />
                <span>support@foodkhazana.com</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <p className="font-semibold">Follow us on social media:</p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUs;
