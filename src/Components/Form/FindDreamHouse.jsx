import React, { useMemo, useState } from "react";
import Data from "../../DataStore/ESTATE.json";
import { FaChevronCircleDown } from "react-icons/fa";
const FindDreamHouse = () => {
    const realData = Data?.palghar_properties ?? [];

    // Safely convert location object to readable text
    const formatLocation = (loc) => {
        if (typeof loc === "string") return loc;
        if (typeof loc === "object" && loc !== null) {
            return `${loc.area || ""}, ${loc.city || ""} (${loc.pincode || ""})`;
        }
        return "Unknown";
    };

    // Extract unique values
    const { locations, types, statuses } = useMemo(() => {
        const loc = new Map(); // map for unique formatted + raw storage
        const typ = new Set();
        const stat = new Set();

        realData.forEach((item) => {
            if (item.location) {
                const label = formatLocation(item.location);
                loc.set(label, item.location); // key = rendered string, value = actual object/string
            }
            if (item.type) typ.add(item.type);
            if (item.status) stat.add(item.status);
        });

        return {
            locations: [...loc.keys()],
            types: [...typ],
            statuses: [...stat],
        };
    }, [realData]);

    // Form State
    const [form, setForm] = useState({
        location: "",
        type: "",
        status: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full flex justify-center p-4">
            {/* Card */}
            <div className="bg-(--primary-color) p-2 md:p-4 rounded-2xl border-4 border-white shadow-xl max-w-4xl w-full relative">

                {/* Logo Box */}
                <div className="absolute w-3/4 -top-10 left-1/2 -translate-x-1/2 bg-white px-1 py-2 rounded-xl shadow-lg flex items-center gap-2">
                    <img src="/palghar_logo.svg" alt="logo" className="w-14" />
                    <span className="font-semibold text-lg">Palghar Infrastructure</span>
                </div>

                <h2 className="text-center font-bold text-xl mt-10 mb-6 underline">
                    Find Your Dream Home
                </h2>

                {/* FORM */}
                <div className="flex flex-col gap-4">

                    {/* LOCATION */}
                    <div className="flex items-center w-full bg-white rounded-xl overflow-hidden">
                        <select
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            className="p-3 w-full outline-none text-gray-700"
                        >
                            <option value="">Location</option>
                            {locations.map((locText, i) => (
                                <option key={i} value={locText}>
                                    {locText}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* TYPE */}
                    <div className="flex items-center w-full bg-white rounded-xl overflow-hidden">
                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="p-3 w-full outline-none text-gray-700"
                        >
                            <option value="">Type</option>
                            {types.map((typ, i) => (
                                <option key={i} value={typ}>
                                    {typ}
                                </option>
                            ))}
                        </select>


                    </div>

                    {/* STATUS */}
                    <div className="flex items-center w-full bg-white rounded-xl overflow-hidden">
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="p-3 w-full outline-none text-gray-700"
                        >
                            <option value="">Status</option>
                            {statuses.map((stat, i) => (
                                <option key={i} value={stat}>
                                    {stat}
                                </option>
                            ))}
                        </select>


                    </div>
                    <div className="flex items-center justify-end w-full">

                        {/* BUTTON */}
                        <button className="w-1/2 cursor-pointer bg-(--darkbg-color) hover:bg-[#b75c4b] text-white p-3 rounded-xl font-semibold mt-2 transition-all">
                            Search
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FindDreamHouse;
