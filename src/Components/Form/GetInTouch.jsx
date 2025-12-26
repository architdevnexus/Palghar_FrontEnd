import { useState } from "react";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";

export default function GetInTouch() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" }); // type: success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, message } = formData;
  if (!name || !email || !message) {
    setStatus({ message: "Please fill all required fields.", type: "error" });
    return;
  }

  setLoading(true);
  setStatus({ message: "", type: "" });

  try {
    const res = await fetch(`${BASE_URL}/contact/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // send cookies
      body: JSON.stringify(formData),
    });

    // Read body once as text
    const text = await res.text();
    let data = null;
    try {
      data = JSON.parse(text); // try parse JSON
    } catch {
      console.warn("Response not JSON:", text);
    }

    if (res.ok) {
      setStatus({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({ message: data?.message || "Something went wrong. Try again.", type: "error" });
    }
  } catch (err) {
    console.error("Error 👉", err);
    setStatus({ message: "Something went wrong. Try again.", type: "error" });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full bg-(--lightbg-color) py-12 flex justify-center">
      <div className="w-[95%] lg:w-[85%] relative flex flex-col lg:flex-row">
        {/* LEFT CARD */}
        <div className="bg-(--darkbg-color) text-white rounded-xl shadow-xl p-8 w-full h-96 lg:w-[32%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 grid items-center z-10">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <div className="flex items-center gap-4 mb-4 text-lg">
            <MdEmail size={28} /> help@palghar.com
          </div>
          <div className="flex items-center gap-4 mb-4 text-lg">
            <MdCall size={28} /> +91 9711034055
          </div>
          <div className="flex items-center gap-4 text-lg leading-6">
            <MdLocationPin size={30} />
            26/B, Tower B–2,
            <br />
            Spaze Itech Park
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white shadow-2xl px-8 py-6 w-full lg:w-full lg:ml-[28%] md:px-24 border rounded-2xl border-gray-100">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-600 mt-3 mb-8 max-w-xl">
            Please don’t hesitate to reach out to us whenever you need assistance. We will respond promptly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-(--primary-color) text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status.message && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
