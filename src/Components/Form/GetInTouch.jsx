import { useState } from "react";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";

export default function GetInTouch() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    enquiryType: "",
    message: "",
  });

  const citySuggestions = [
    "Mira Road",
    "Bhayandar",
    "Naigaon",
    "Palghar",
    "Vasai",
    "Saphale",
    "Virar",
    "Vaitarna",
    "Umroli",
    "Boisar",
    "Vada",
    "Dahanu Road",
    "Vangaon",
    "Kelva Road",
  ];


  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email } = formData;

    if (!name || !phone || !email) {
      setStatus({ message: "Please fill all required fields.", type: "error" });
      return;
    }

    if (phone.length !== 10) {
      setStatus({ message: "Please enter a valid 10-digit phone number.", type: "error" });
      return;
    }

    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const payload = { ...formData, countryCode: "+91" };

      const res = await fetch(`${BASE_URL}/api/enquiry/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data = null;

      try {
        data = JSON.parse(text);
      } catch {
        console.warn("Response not JSON:", text);
      }

      if (res.ok) {
        setStatus({ message: "Enquiry sent successfully!", type: "success" });

        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          enquiryType: "",
          message: "",
        });
      } else {
        setStatus({
          message: data?.message || "Something went wrong.",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Error 👉", err);
      setStatus({ message: "Something went wrong.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-(--lightbg-color) py-5 flex justify-center px-4">
      <div className="w-full max-w-7xl relative flex flex-col lg:flex-row items-center">

        {/* LEFT CARD */}
        <div
          className="
          bg-(--darkbg-color)
          text-white
          rounded-xl
          shadow-xl
          p-6
          w-full
          lg:w-[32%]
          lg:absolute
          lg:left-0
          lg:top-1/2
          lg:-translate-y-1/2
          grid
          gap-4
          z-10
        "
        >
          <h2 className="text-xl sm:text-2xl font-semibold">Contact Us</h2>

          <div className="flex items-center gap-4 text-sm sm:text-lg break-all">
            <MdEmail size={26} />
            <span>vision@palgharindia.com</span>
          </div>

          <div className="flex items-center gap-4 text-sm sm:text-lg">
            <MdCall size={26} /> +91 88985 88985
          </div>

          <div className="flex items-start gap-4 text-sm sm:text-lg leading-6">
            <MdLocationPin size={28} />
            <p>
              Shop No. 30, D Wing, Om Sai Complex, Near Atithi Banquets, Betegaon, Boisar East, 
              <br /> Palghar – 401501
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          className="
          bg-white
          shadow-2xl
          px-6 py-6
          sm:px-10
          lg:px-14
          w-full
          max-w-2xl
          mt-6
          lg:ml-[30%]
          border
          rounded-2xl
          border-gray-100
        "
        >

          <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch</h2>

          <p className="text-gray-600 mt-3 mb-8 max-w-xl text-sm sm:text-base">
            Please don’t hesitate to reach out to us whenever you need assistance.
            We will respond promptly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* NAME */}
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

            {/* EMAIL */}
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

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Phone</label>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  value="+91"
                  disabled
                  className="w-full sm:w-24 mt-2 p-3 border rounded-lg bg-gray-100"
                />

                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  minLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color) flex-1"
                />
              </div>
            </div>

            {/* CITY + TYPE */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex flex-col w-full">
                <label className="text-gray-700 font-medium">City</label>

                <input
                  type="text"
                  name="city"
                  list="city-list"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
                  placeholder="Select or type city"
                />

                <datalist id="city-list">
                  {citySuggestions.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-gray-700 font-medium">Enquiry Type</label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
                >
                  <option value="">Select</option>
                  <option>Residential</option>
                  <option>Commercial Area</option>
                  <option>Open Plot</option>
                  <option>Bungalow</option>
                  <option>Warehouse</option>
                  <option>Industrial Area</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                  <option>5 BHK</option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
              bg-[#23c1eb]
              text-white
              py-3
              rounded-lg
              font-medium
              hover:bg-opacity-90
              transition-all
              disabled:opacity-50
            "
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status.message && (
              <p
                className={`text-sm ${status.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
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
