import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

export default function EnquireForm({ open, onClose }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    enquiryType: "",
    message: ""
  });


  const citySuggestions = [
    "Mumbai",
    "Thane",
    "Mira Road",
    "Bhayander",
    "Palghar",
    "Vasai",
    "Virar",
    "Nalasopara",
    "Boisar",
    "Dahisar",
    "Borivali",
    "Andheri",
  ];

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Input change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, city, enquiryType, message } = formData;

    if (!name || !phone || !email) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      const payload = { name, phone, email, city, enquiryType, message, countryCode: "+91" };
      console.log("Enquiry Payload 👉", payload);

      const res = await fetch(`${BASE_URL}/api/enquiry/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload)
      });

      const text = await res.text();
      let data = null;
      try { data = JSON.parse(text); } catch { console.warn("Response not JSON:", text); }

      if (res.ok) {
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          enquiryType: "",
          message: ""
        });
        setTimeout(onClose, 2000); // auto-close after 2s
      } else {
        setSuccessMessage(`⚠️ ${data?.message || "Something went wrong. Try again."}`);
      }
    } catch (err) {
      console.error("Enquiry Error 👉", err);
      setSuccessMessage("⚠️ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/Logo.png" alt="Palghar Logo" className="h-14" />
        </div>

        {/* Title */}
        <p className="text-center text-sm text-gray-600 mb-5">
          Please share your details, and our team will get in touch with you shortly.
        </p>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 rounded-lg bg-green-100 px-4 py-2 text-center text-sm text-green-700">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name*"
            required
            className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="flex gap-2">
            <input
              type="text"
              value="+91"
              disabled
              className="w-20 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number*"
              required
              className="flex-1 rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="flex gap-2">
            {/* CITY + TYPE */}
            <div className="flex gap-6">
              <input
                type="text"
                name="city"
                list="city-list"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"

                placeholder="Select or type city"
              />

              <datalist id="city-list">
                {citySuggestions.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="w-1/2 rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="" disabled>
                Type of Enquiry
              </option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Investment</option>
            </select>
          </div>

          <textarea
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message (Optional)"
            className="w-full resize-none rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-lg bg-teal-600 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
