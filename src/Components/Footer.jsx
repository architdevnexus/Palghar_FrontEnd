import { useNavigate } from "react-router-dom";
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

    const socialMedia = [
        { id: 1, link: "/insta", icon: <FaInstagram /> },
        { id: 2, link: "/facebook", icon: <FaFacebook /> },
        { id: 3, link: "/linkedin", icon: <FaLinkedin /> },
        { id: 4, link: "/twitter", icon: <FaTwitter /> },
        { id: 5, link: "/youtube", icon: <CiYoutube /> },
    ];

    // Navigate to a page and scroll it to the top first
    const goTo = (path) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(path);
    };

    return (
        <footer className="relative bg-(--footer-color) text-white px-6 md:px-12 lg:px-20 pb-3 pt-10">

            {/* GRID START */}
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

                {/* ---------- Column 1 ---------- */}
                <div className="flex     flex-col gap-5">
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
                                onClick={() => goTo(s.link)}
                                className="p-2 bg-white/10 hover:bg-[#23c1eb] rounded-full transition text-lg"
                            >
                                {s.icon}
                            </button>
                        ))}
                    </div>

                    {/* Contact Section */}

                </div>

                {/* ---------- Column 2 (Links) ---------- */}
                <div className="flex     flex-col gap-3">
                    <h2 className="text-lg font-semibold">Links</h2>

                    {Navdata.map((link) => (
                        <span
                            key={link.id}
                            onClick={() => goTo(link.path)}
                            className="cursor-pointer text-sm hover:text-[#23c1eb] transition"
                        >
                            {link.name}
                        </span>
                    ))}
                </div>

                {/* Contact info */}
                <div className="flex flex-col    justify-between mt-2">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Details</h3>
                        <p className="text-sm opacity-75 max-w-xs leading-5">
                            If you have any questions or need help feel free
                            to contact our team!
                        </p>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm">
                        <FaPhone className="shrink-0" />
                        <a href="tel:+918898588985" className="hover:underline">
                            +91 88985 88985
                        </a>
                    </div>

                    <div className="mt-2 flex items-start gap-2 text-sm">
                        <FaMailBulk className="shrink-0 mt-1" />
                        <a
                            target="_blank"
                            href="mailto:support@palgharindia.com"
                            className="break-all hover:underline"
                        >
                            support@palgharindia.com
                        </a>
                    </div>


                    <div className="mt-2 flex items-center gap-2 text-sm">
                        <FaLocationArrow className="shrink-0" />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.com/maps/search/?api=1&query=Shop+No.+B34,+Shanti+Shopping+center,+Mira+Road+East,+Thane+-+401107"
                            className="hover:underline"
                        >
                            Shop No. B34 , Shanti Shopping center ,Mira Road East, Thane - 401107
                        </a>
                    </div>
                </div>

                {/* ---------- Column 3 (Newsletter) ---------- */}
                <div className="flex     flex-col">

                    <NewsLetter />
                </div>
            </div>



            {/* Legal Links */}
            <div className="flex justify-center text-gray-  mt-5  underline gap-5  text-sm">
                <span className="cursor-pointer  hover:text-[#23c1eb]" onClick={() => goTo('/privacy')}>
                    Privacy Policy
                </span>
                <span className="cursor-pointer hover:text-[#23c1eb]" onClick={() => goTo('/terms')}>
                    Terms & Conditions
                </span>
                <span className="cursor-pointer hover:text-[#23c1eb]" onClick={() => goTo('/cancellation')}>
                    Cancellations Policy
                </span>
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
