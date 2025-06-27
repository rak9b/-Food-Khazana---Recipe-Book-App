import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("resetEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleReset = (e) => {
    e.preventDefault();
    Swal.fire({
    title: "Link Sent",
    text: "Password Link has been sent to your email!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Go to Gmail!"
    }).then((result) => {
    if (result.isConfirmed) {
        window.location.href = "https://mail.google.com";
    }
});
  };

  return (
    <>
        <div className="min-h-screen  flex items-center justify-center  px-4">
      <div className="w-full max-w-md shadow-2xl border border-primary rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Reset Your Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block  font-medium mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="your@email.com"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-2">
            Reset Password
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default ForgotPassword;
