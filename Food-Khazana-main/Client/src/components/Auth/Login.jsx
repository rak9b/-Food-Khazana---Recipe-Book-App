import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { Link, useNavigate, useLocation } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import bg from "/images/regbg.jpg";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Google login failed!",
          footer: error.message,
          timer: 2000,
        });
      });
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    sessionStorage.setItem("resetEmail", email);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: error.message,
          timer: 2000,
        });
      });
  };

  return (
    <div className="min-h-screen  flex justify-center items-center py-10 px-4" style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", 
            backgroundPosition: "center",
          }}>
      <div className="grid md:grid-cols-2 shadow-xl bg-base-100 rounded-3xl border border-primary  max-w-4xl w-full overflow-hidden">
        <div
          className="hidden md:block bg-cover bg-center"
          style={{
            backgroundImage: "url(https://i.ibb.co/8FkpxCf/image.png)",
            minHeight: "100%",
          }}
        ></div>
        <div className="p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary">Welcome Back!</h1>
            <p className="text-lg mt-2 text-accent">
              Log in to access your profile, share recipes, and discover what
              others are cooking.
            </p>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label font-medium ">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label font-medium ">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3  z-10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="text-sm mt-1 text-right">
                <Link
                  to="/forgot-password"
                  className="text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-full text-white font-semibold"
            >
              Login
            </button>

            <div className="divider text-sm ">OR</div>

            {/* Google Button */}
            <button
              type="button"
              onClick={handleGoogleSignin}
              className="btn  btn-outline w-full flex items-center justify-center gap-2 hover:bg-slate-600 hover:text-white"
            >
              <FcGoogle size={22} />
              Continue with Google
            </button>

            {/* Redirect */}
            <p className="text-center text-sm ">
              Don’t have an account?
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:text-pink-500 ml-1"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
