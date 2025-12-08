import { useState } from "react";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import { auth } from "../../api/apiCall";

export default function GetInTouch() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await auth.getinTouch(formData); // corrected function name
            setSuccess("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setSuccess("Something went wrong. Try again.");
        }

        setLoading(false);
    };

    return (
        <div className="w-full bg-(--lightbg-color) py-12 flex justify-center ">
            <div className="w-[95%] lg:w-[85%] relative flex flex-col lg:flex-row">

                {/* LEFT SIDE CARD */}
                <div className="
                    bg-(--darkbg-color) 
                    text-white 
                    rounded-xl 
                    shadow-xl 
                    p-8 
                    w-full 
                    h-96
                    lg:w-[32%]
                    lg:absolute 
                    lg:left-0 
                    lg:top-1/2 
                    lg:-translate-y-1/2
                    grid items-center
                    z-10
                ">
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

                {/* RIGHT SIDE FORM WRAPPER */}
                <div className="
                    bg-white 
                    shadow-2xl 
                    px-8
                    py-6 
                    w-full 
                    lg:w-full 
                    lg:ml-[28%] 
                    md:px-24
                    border 
                    rounded-2xl
                    border-gray-100
                ">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>

                    <p className="text-gray-600 mt-3 mb-8 max-w-xl">
                        Please don’t hesitate to reach out to us whenever you need assistance.
                        We will respond promptly.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {/* NAME */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
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
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-(--primary-color)"
                            ></textarea>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                bg-(--primary-color) 
                                text-white 
                                py-3
                                rounded-lg 
                                font-medium 
                                hover:bg-opacity-90 
                                transition-all
                            "
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>

                        {/* STATUS */}
                        {success && (
                            <p className="text-green-600 text-sm">{success}</p>
                        )}
                    </form>
                </div>

            </div>
        </div>
    );
}
