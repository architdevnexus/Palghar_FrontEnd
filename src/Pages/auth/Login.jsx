import React, { useState } from "react";
import { useAppStore } from "../../store/authStore";

export default function LoginPage() {
  const loginUser = useAppStore((s) => s.loginUser);
  const [body, setBody] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      await loginUser(body);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6">
      <input
        className="border p-2"
        placeholder="Email"
        onChange={(e) => setBody({ ...body, email: e.target.value })}
      />

      <input
        className="border p-2 mt-2"
        placeholder="Password"
        type="password"
        onChange={(e) => setBody({ ...body, password: e.target.value })}
      />

      <button
        onClick={handleLogin}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
