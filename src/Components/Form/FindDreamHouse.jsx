import React, {
    useEffect,
    useMemo,
    useState,
    useCallback,
} from "react";
import { useMainStore } from "../../store/GetAllData";
import SearchPopup from "../PopUp/SearchPopup";

const FindDreamHouse = () => {
    const { loading, error, fetchAllData, projectdata } = useMainStore();
    const [showPopup, setShowPopup] = useState(false);

    const [filters, setFilters] = useState({
        location: "",
        type: "",
        status: "",
    });

    /* ---------- FETCH DATA ---------- */
    useEffect(() => {
        fetchAllData();
    }, [fetchAllData]);

    /* ---------- NORMALIZE DATA ---------- */
    const data = useMemo(() => {
        const source = projectdata?.[0];
        if (!source) return [];

        const properties =
            source.properties?.map((p) => ({
                id: p._id,
                name: p.name,
                city: p.location?.city || "",
                area: p.location?.area || "",
                status: p.status,
                type: p.type,
                image: p.images?.[0]?.url,
                price: p.pricing?.sale_price,
            })) || [];

        const projects =
            source.projects?.map((p) => ({
                id: p._id,
                name: p.name,
                city: p.address || "",
                area: "",
                status: p.status,
                type: "Project",
                image: p.image?.url,
            })) || [];

        return [...properties, ...projects];
    }, [projectdata]);

    /* ---------- FILTER OPTIONS ---------- */
    const options = useMemo(() => {
        const locations = new Set();
        const types = new Set();
        const statuses = new Set();

        data.forEach((item) => {
            locations.add(
                `${item.city}${item.area ? `, ${item.area}` : ""} • ${item.status}`
            );
            types.add(item.type);
            statuses.add(item.status);
        });

        return {
            locations: [...locations],
            types: [...types],
            statuses: [...statuses],
        };
    }, [data]);

    /* ---------- FILTER CHANGE ---------- */
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    }, []);

    /* ---------- FILTER RESULTS ---------- */
    const results = useMemo(() => {
        return data.filter((item) => {
            const locationKey = `${item.city}${item.area ? `, ${item.area}` : ""
                } • ${item.status}`;

            if (filters.location && filters.location !== locationKey) return false;
            if (filters.type && filters.type !== item.type) return false;
            if (filters.status && filters.status !== item.status) return false;

            return true;
        });
    }, [data, filters]);

    /* ---------- LOADING ---------- */
    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <div className="w-full max-w-md h-72 bg-gray-200 animate-pulse rounded-3xl" />
            </div>
        );
    }

    if (error) {
        return (
            <p className="text-center text-red-500 py-10">
                {error}
            </p>
        );
    }

    return (
        <>
            {/* SEARCH CARD */}
            <div className="flex relative justify-center relative px-4 py-10">
                <div className="w-full max-w-md bg-[var(--primary-color)] p-6 rounded-3xl shadow-xl text-white">
                    <h2 className="text-center text-2xl font-bold mb-6">
                        Find Your Dream Home
                    </h2>

                    <div className="flex flex-col gap-4">
                        <select
                            name="location"
                            onChange={onChange}
                            className="p-3 rounded-xl text-black"
                        >
                            <option value="">Select Location</option>
                            {options.locations.map((l) => (
                                <option key={l} value={l}>
                                    {l}
                                </option>
                            ))}
                        </select>

                        <select
                            name="type"
                            onChange={onChange}
                            className="p-3 rounded-xl text-black"
                        >
                            <option value="">Select Type</option>
                            {options.types.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>

                        <select
                            name="status"
                            onChange={onChange}
                            className="p-3 rounded-xl text-black"
                        >
                            <option value="">Select Status</option>
                            {options.statuses.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={() => setShowPopup(true)}
                            className="bg-black hover:bg-gray-900 transition p-3 rounded-xl font-semibold"
                        >
                            Search Properties
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute">

                {/* ✅ REUSABLE POPUP */}
                <SearchPopup
                    open={showPopup}
                    onClose={() => setShowPopup(false)}
                    results={results}
                    loading={loading}
                />
            </div>
        </>
    );
};

export default FindDreamHouse;
