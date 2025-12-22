import { useEffect } from "react";
import { X } from "lucide-react";

export default function EnquireForm({ open, onClose }) {
    // Prevent background scroll when modal is open
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            {/* Modal Card */}
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-fadeIn">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-black"
                >
                    <X size={20} />
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img
                        src="/palghar_logo.svg"
                        alt="Palghar Logo"
                        className="h-14"
                    />
                </div>

                {/* Title */}
                <p className="text-center text-sm text-gray-600 mb-5">
                    Please share your details, and our team will get in touch with you shortly.
                </p>

                {/* Form */}
                <form className="space-y-4">
                    {/* Full Name */}
                    <input
                        type="text"
                        placeholder="Full Name*"
                        className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />

                    {/* Phone */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value="+91"
                            disabled
                            className="w-20 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number*"
                            className="flex-1 rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email*"
                        className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />

                    {/* City & Enquiry Type */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="City"
                            className="w-1/2 rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <select
                            className="w-1/2 rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Type of Enquiry
                            </option>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Investment</option>
                        </select>
                    </div>

                    {/* Message */}
                    <textarea
                        placeholder="Message (Optional)"
                        rows={3}
                        className="w-full resize-none rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer rounded-lg bg-teal-600 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
