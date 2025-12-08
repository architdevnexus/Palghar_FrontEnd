import { useState } from "react";
import { auth } from "../../api/apiCall";

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setMessage("Please enter a valid email.");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const res = await auth.newsLetter({ email }); // ⬅️ API call

            if (res?.status) {
                setMessage("Thank you for subscribing!");
                setEmail("");
            } else {
                setMessage("Subscription failed. Try again!");
            }
        } catch (error) {
            setMessage("Something went wrong.");
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
                    className="bg-white text-(--primary-color) outline-none px-4 py-2 rounded-xl w-60"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-(--primary-color) text-white px-5 py-2 rounded-xl disabled:opacity-50"
                >
                    {loading ? "..." : "Subscribe"}
                </button>
            </form>

            {message && (
                <span className="text-sm text-red-500 mt-1">
                    {message}
                </span>
            )}
        </div>
    );
}
