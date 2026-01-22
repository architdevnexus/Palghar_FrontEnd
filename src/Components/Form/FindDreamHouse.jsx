import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useMainStore } from "../../store/GetAllData";
import Modal from "../PopUp/Modal";
import { CiSquareChevDown } from "react-icons/ci";

/* ---------------- LOGO BOX ---------------- */
const LogoBox = React.memo(() => (
  <div className="absolute -top-14 left-14 sm:left-24 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
    <img
      src="/Logo.png"
      alt="Palghar Infrastructure"
      className="h-12 w-12 object-contain"
    />
    <span className="text-sm font-bold leading-tight text-black">
      Palghar
      <br />
      Infrastructure
    </span>
  </div>
));

/* ---------------- FILTER SELECT ---------------- */
const FilterSelect = React.memo(
  ({ name, value, onChange, placeholder, options }) => (
    <div className="relative h-12">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-full w-full cursor-pointer appearance-none rounded-xl bg-white px-4 pr-12 text-sm text-black outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Black dropdown section */}
      <div className="pointer-events-none absolute right-0 top-0 flex h-full w-12 items-center justify-center rounded-r-xl bg-black">
        <CiSquareChevDown size={20} className="text-white" />
      </div>
    </div>
  )
);

const FindDreamHouse = () => {
  const { loading, error, fetchAllData, projectdata } = useMainStore();

  const [showPopup, setShowPopup] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    status: "",
  });

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  /* ---------------- NORMALIZE DATA ---------------- */
  const data = useMemo(() => {
    const source = projectdata?.[0];
    if (!source) return [];

    const properties =
      source.properties?.map((p) => ({
        id: p._id,
        name: p.name,
        city: p.location?.city || "",
        status: p.status,
        type: p.type,
        image: p.images?.[0]?.url,
        price: p.pricing?.sale_price,
        locationKey: `${p.location?.city || ""}${
          p.location?.area ? `, ${p.location.area}` : ""
        }`,
      })) || [];

    const projects =
      source.projects?.map((p) => ({
        id: p._id,
        name: p.name,
        city: p.address || "",
        status: p.status,
        type: "Project",
        image: p.image?.url,
        locationKey: p.address || "",
      })) || [];

    return [...properties, ...projects];
  }, [projectdata]);

  /* ---------------- FILTER OPTIONS ---------------- */
  const options = useMemo(() => {
    const locations = new Set();
    const types = new Set();
    const statuses = new Set();

    data.forEach((item) => {
      locations.add(item.locationKey);
      types.add(item.type);
      statuses.add(item.status);
    });

    return {
      locations: [...locations],
      types: [...types],
      statuses: [...statuses],
    };
  }, [data]);

  /* ---------------- HANDLERS ---------------- */
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }, []);

  const results = useMemo(() => {
    return data.filter((item) => {
      if (filters.location && filters.location !== item.locationKey) return false;
      if (filters.type && filters.type !== item.type) return false;
      if (filters.status && filters.status !== item.status) return false;
      return true;
    });
  }, [data, filters]);

  /* ---------------- STATES ---------------- */
  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-80 w-full max-w-md animate-pulse rounded-3xl bg-gray-200" />
      </div>
    );
  }

  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>;
  }

  return (
    <>
      {/* SEARCH CARD */}
      <div className="flex justify-center px-4 py-8">
        <div className="relative w-full max-w-md rounded-3xl bg-[var(--primary-color)] px-6 pb-6 pt-10 text-white shadow-2xl">
          <LogoBox />

          <h2 className="mb-8 text-center text-2xl font-bold">
            Find Your Dream Home
          </h2>

          <div className="flex flex-col gap-4">
            <FilterSelect
              name="location"
              value={filters.location}
              onChange={onChange}
              placeholder="Location"
              options={options.locations}
            />

            <FilterSelect
              name="type"
              value={filters.type}
              onChange={onChange}
              placeholder="Type"
              options={options.types}
            />

            <FilterSelect
              name="status"
              value={filters.status}
              onChange={onChange}
              placeholder="Status"
              options={options.statuses}
            />

            <button
              onClick={() => setShowPopup(true)}
              className="mt-4 self-end rounded-xl bg-[#4CAF50] px-8 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* RESULTS MODAL */}
      {showPopup && (
        <Modal onClose={() => setShowPopup(false)}>
          <h3 className="mb-6 text-2xl font-bold">Search Results</h3>

          {results.length === 0 ? (
            <p className="text-center text-gray-500">No properties found</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border shadow transition hover:shadow-lg"
                >
                  <img
                    src={item.image || "/placeholder.jpg"}
                    alt={item.name}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.city}</p>

                    <div className="mt-3 flex justify-between text-sm">
                      <span className="rounded bg-gray-100 px-2 py-1">
                        {item.type}
                      </span>
                      <span className="font-medium text-green-600">
                        {item.status}
                      </span>
                    </div>

                    {item.price && (
                      <p className="mt-2 font-bold">₹ {item.price}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default FindDreamHouse;
