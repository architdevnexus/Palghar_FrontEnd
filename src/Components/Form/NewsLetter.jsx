import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const payload = { email };

      // ✅ Vite-safe dev log
      if (import.meta.env.DEV) {
        console.log("Newsletter Payload 👉", payload);
      }

      const res = await fetch(`${BASE_URL}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include", // required if backend uses cookies
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Subscription failed");
      }

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter Error 👉", error.message);
      setMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <span className="text-lg font-semibold">Newsletter Signup</span>
      <span className="text-sm text-white">
        Subscribe to our Newsletter for latest updates!
      </span>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center gap-3 mt-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white text-(--primary-color) outline-none px-4 py-2 rounded-xl min-w-50 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#23c1eb] text-white px-5 py-2 rounded-xl disabled:opacity-50"
        >
          {loading ? "..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <span className="text-sm text-[#23c1eb] mt-1">
          {message}
        </span>
      )}
    </div>
  );
}
