import React, { useState } from "react";
import { useAppStore } from "../../store/authStore";

export default function LoginPage() {
  const loginUser = useAppStore((s) => s.loginUser);
  const [body, setBody] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(body);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      
      {/* Popup Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fadeIn">
        
        <h2 className="text-3xl font-semibold text-center mb-6">
          Login to Your Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email Address</label>
            <input
              className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setBody({ ...body, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password</label>
            <input
              className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setBody({ ...body, password: e.target.value })}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </form>

        {/* Signup redirect */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>

        {/* Forgot Password */}
        <p className="text-center text-sm mt-2">
          <a href="/forgot-password" className="text-gray-600 hover:underline">
            Forgot your password?
          </a>
        </p>

      </div>
    </div>
  );
}
