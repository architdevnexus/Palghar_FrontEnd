import { useNavigate } from "react-router-dom";
import Data from "../DataStore/ESTATE.json";
import { Navdata } from "../DataStore/Navdata";

import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaPhone,
    FaMailBulk,
    FaLocationArrow,
} from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import NewsLetter from "../Components/Form/NewsLetter";

export default function Footer() {
    const navigate = useNavigate();
    const Location = Data?.palghar_properties || [];

    const socialMedia = [
        { id: 1, link: "/insta", icon: <FaInstagram /> },
        { id: 2, link: "/facebook", icon: <FaFacebook /> },
        { id: 3, link: "/linkedin", icon: <FaLinkedin /> },
        { id: 4, link: "/twitter", icon: <FaTwitter /> },
        { id: 5, link: "/youtube", icon: <CiYoutube /> },
    ];

    return (
        <footer className="relative bg-(--footer-color) text-white px-6 md:px-12 lg:px-20 py-16">

            {/* GRID START */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

                {/* ---------- Column 1 ---------- */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                        <img src="/Logo.png" alt="logo" className="w-12 h-12" />

                        <div>
                            <h2 className="text-lg font-bold">Palghar Infrastructure</h2>
                            <p className="text-sm opacity-80 mt-1 leading-5 max-w-xs">
                                At PALGHAR INFRASTRUCTURE, we’ve spent the last 25+ years
                                shaping the future of India’s transportation landscape.
                            </p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {socialMedia.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => navigate(s.link)}
                                className="p-2 bg-white/10 hover:bg-(--primary-color) rounded-full transition text-lg"
                            >
                                {s.icon}
                            </button>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-2">
                        <h3 className="text-lg font-bold mb-2">Contact Details</h3>
                        <p className="text-sm opacity-75 max-w-xs leading-5">
                            If you have any questions or need help feel free
                            to contact our team!
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-sm">
                            <FaPhone /> +91 88980 12184
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-sm">
                            <FaMailBulk /> palghar.infrastructurellp@gmaail.com
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-sm">
                            <FaLocationArrow /> Shop No. B34 , Shanti Shopping center ,Mira Road East, Thane - 401107
                        </div>
                    </div>
                </div>

                {/* ---------- Column 2 (Links) ---------- */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg font-semibold">Links</h2>

                    {Navdata.map((link) => (
                        <span
                            key={link.id}
                            onClick={() => navigate(link.path)}
                            className="cursor-pointer text-sm hover:text-(--primary-color) transition"
                        >
                            {link.name}
                        </span>
                    ))}

                    <div className="flex flex-col mt-3 underline gap-8  text-sm">
                        <span className="cursor-pointer  hover:text-(--primary-color)" onClick={() => navigate('/privacy')}>
                            Privacy Policy
                        </span>
                        <span className="cursor-pointer hover:text-(--primary-color)" onClick={() => navigate('/terms')}>
                            Terms & Conditions
                        </span>
                        <span className="cursor-pointer hover:text-(--primary-color)" onClick={() => navigate('/cancellation')}>
                            Cancellations Policy
                        </span>
                    </div>
                </div>

                {/* ---------- Column 3 (Locations) ---------- */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg font-semibold">Locations</h2>

                    <div className="flex flex-col max-h-80 overflow-y-scroll gap-2 text-sm opacity-80">
                        {Location.map((e, idx) => (
                            <span
                                key={idx}
                                className="hover:text-(--primary-color) cursor-pointer"
                            >
                                {e.location?.city}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ---------- Column 4 (Newsletter) ---------- */}
                <div className="flex flex-col">

                    <NewsLetter />
                </div>
            </div>

            {/* Bottom Large Text */}
            <img
                src="/PALGHAR.svg"
                alt="Palghar"
                className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none select-none"
            />
        </footer>
    );
}
