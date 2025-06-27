import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.init";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import loginbg from "/images/loginbg.jpg"

const Register = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `❌ Google login failed: ${error.message}`,
          timer: 2000,
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: "🎉 Registration successful!",
            showConfirmButton: false,
            timer: 2000,
          });
          e.target.reset();
          setTimeout(() => navigate("/login"), 2000);
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `❌ Registration failed: ${error.message}`,
          timer: 2000,
        });
      });
  };

  return (
    <div
      className="min-h-screen bg-base-200 flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-2xl bg-base-100 border border-primary shadow-lg rounded-2xl p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Join Our Foodie Community
          </h1>
          <p className="text-lg mt-2 text-accent">
            Create an account to share your recipes, save favorites, and connect
            with fellow food lovers!
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text text-base font-medium">
                Full Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-base font-medium">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="someone@domain.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo */}
          <div>
            <label className="label">
              <span className="label-text text-base font-medium">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="https://your-photo-url.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base font-medium">Password</span>
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must include 8+ characters, a number, a lowercase and an uppercase letter"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full text-lg">
            Register
          </button>

          <div className="divider font-bold">OR</div>

          <button
            onClick={handleGoogleSignin}
            type="button"
            className="btn btn-outline w-full text-base font-semibold hover:scale-105 transition-transform"
          >
            <FcGoogle size={22} />
            Sign Up with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary hover:text-yellow-300">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
