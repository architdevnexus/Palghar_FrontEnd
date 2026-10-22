import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
// images live in /public, so use their URL (no import)
const greenUrbanCollage = "/Green%20Urban%20Development%20Collage.png";
const coupleImg = "/Couple.png";

/* ---------------- DATA ---------------- */
// each location keeps its own dot colour
const LOCATIONS = [
  { name: "Vada", color: "#E8283C" },
  { name: "Mira Road", color: "#9B3FA0" },
  { name: "Bhayandar", color: "#A6C934" },
  { name: "Naigaon", color: "#3B7F6B" },
  { name: "Vasai", color: "#F7931E" },
  { name: "Virar", color: "#12A05C" },
  { name: "Vaitarna", color: "#77777D" },
  { name: "Saphale", color: "#EE2B3F" },
  { name: "Kelva Road", color: "#8C8470" },
  { name: "Palghar", color: "#D96B6B" },
  { name: "Umroli", color: "#2E3192" },
  { name: "Boisar", color: "#D9C45F" },
  { name: "Vangaon", color: "#C9932A" },
  { name: "Dahanu Road", color: "#A0472F" },
];

const PROPERTY_TYPES = [
  "Residence",
  "Commercial Area",
  "Open Plot",
  "Bungalow",
  "Warehouse",
  "Industrial Area",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "5 BHK",
];

const BASE_URL = import.meta.env.VITE_BASE_URL;

/* fetch that gives up after `ms` so the form can never hang on "Sending..." */
const fetchWithTimeout = (url, options = {}, ms = 20000) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
};

/* ---------------- POPUP ---------------- */
function LocationModal({ location, onClose }) {
  const [type, setType] = useState("All");
  const [form, setForm] = useState({ name: "", phone: "", email: "", note: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | sending | done | error

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const pill = (active) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
      active
        ? "bg-[#23c1eb] text-white"
        : "bg-gray-100 text-gray-700 hover:bg-[#E8FCFF] hover:text-[#23c1eb]"
    }`;

  const submit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(form.phone)) {
      setStatus({ state: "error", msg: "Please enter a valid 10-digit phone number." });
      return;
    }

    const lines = [
      `Location: ${location.name}`,
      `Property type: ${type}`,
      form.note ? `Note: ${form.note}` : null,
    ].filter(Boolean);

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      city: location.name,
      // same values as the header Enquire / Get in Touch forms
      enquiryType: type === "Residence" ? "Residential" : type === "All" ? "" : type,
      message: lines.join("\n"),
      countryCode: "+91",
    };

    setStatus({ state: "sending", msg: "" });

    // save in backend (same API as the header Enquire / Get in Touch forms)
    try {
      const res = await fetchWithTimeout(`${BASE_URL}/api/enquiry/create`, {
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
        setStatus({ state: "done", msg: "" });
      } else {
        setStatus({ state: "error", msg: data?.message || "Something went wrong. Please try again." });
      }
    } catch (err) {
      console.error("Enquiry error 👉", err);
      setStatus({ state: "error", msg: "Something went wrong. Please try again." });
    }
  };

  const input =
    "w-full rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#23c1eb]";

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        {/* header */}
        <div className="px-6 pt-6">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          >
            <X size={18} />
          </button>
          <p className="text-sm text-gray-500">Selected location</p>
          <h3 className="mt-1 text-2xl font-semibold text-gray-900">{location.name}</h3>
          <hr className="mt-5 border-gray-100" />
        </div>

        {status.state === "done" ? (
          <div className="flex flex-col items-center text-center px-6 py-12 gap-3">
            <CheckCircle2 size={56} className="text-green-500" />
            <h4 className="text-xl font-bold text-gray-900">Thank you, {form.name}!</h4>
            <p className="text-gray-600 text-sm">
              We received your interest in <b>{type}</b> at <b>{location.name}</b>. Our team will
              contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 rounded-xl bg-[#23c1eb] px-8 py-2.5 font-semibold text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 py-6 space-y-5">
            {/* property type */}
            <div>
              <p className="mb-2 font-semibold text-gray-800">Property type</p>
              <div className="flex flex-wrap gap-2">
                {["All", ...PROPERTY_TYPES].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={pill(type === t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* contact details */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-800">Your contact details</p>
              <input name="name" value={form.name} onChange={onChange} required placeholder="Full name*" className={input} />
              <div className="flex gap-2">
                <input value="+91" disabled className="w-16 rounded-xl bg-gray-100 px-3 py-3 text-sm text-gray-500 text-center" />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))
                  }
                  required
                  inputMode="numeric"
                  placeholder="Phone number*"
                  className={`${input} flex-1`}
                />
              </div>
              <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Email*" className={input} />
              <textarea name="note" rows={2} value={form.note} onChange={onChange} placeholder="Anything else? (optional)" className={`${input} resize-none`} />
            </div>

            {status.state === "error" && (
              <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{status.msg}</p>
            )}

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full rounded-xl bg-[#23c1eb] py-3 font-bold text-white transition hover:brightness-110 disabled:opacity-60 cursor-pointer"
            >
              {status.state === "sending" ? "Sending..." : "Send my enquiry"}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>,
    document.body
  );
}

/* ---------------- PAGE ---------------- */
const HOTLINE = "8898588985";

export default function PurchasesSales() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full rounded-2xl bg-[#F6FBFC] p-3 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* ---------- HERO BANNER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#23c1eb] via-[#1aa9d1] to-[#0B6E8E] px-6 py-10 text-white md:px-12 md:py-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[28px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full border-[32px] border-white/10" />

          <div className="relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* LEFT: all content */}
            <div className="flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Palghar Growth Partner LLP
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] md:text-6xl">
                Where do you want to own?
              </h1>

              <p className="mt-4 max-w-xl text-white/85 md:text-lg">
                Pick an area, tell us what you need. Residence, plots, warehouses and more.
              </p>

              <a
                href={`tel:+91${HOTLINE}`}
                className="mt-8 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-[#0B6E8E] shadow-lg transition hover:scale-[1.03]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#23c1eb] text-white">
                  <Phone size={22} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Hotline
                  </span>
                  <span className="text-xl font-extrabold">88985 88985</span>
                </span>
              </a>
            </div>

            {/* RIGHT: image */}
            <div className="relative">
              <img
                src={greenUrbanCollage}
                alt="Green Urban Development Collage"
                className="h-64 w-full rounded-2xl object-cover shadow-2xl ring-4 ring-white/20 md:h-[420px]"
              />
            </div>
          </div>
        </motion.div>

        {/* ---------- LOCATION CARDS ---------- */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {LOCATIONS.map((loc, i) => (
            <motion.button
              key={loc.name}
              type="button"
              onClick={() => setSelected(loc)}
              style={{ "--c": loc.color }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.03, duration: 0.35 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white px-5 py-4 text-left shadow-sm transition-all duration-300 hover:border-[#23c1eb]/40 hover:shadow-[0_14px_30px_-12px_rgba(35,193,235,0.45)] md:py-5"
            >
              {/* left accent bar that grows on hover */}
              <span className="absolute inset-y-0 left-0 w-1 origin-center scale-y-0 bg-[#23c1eb] transition-transform duration-300 group-hover:scale-y-100" />

              {/* name */}
              <span className="min-w-0 flex-1">
                <span className="block truncate text-base font-semibold text-gray-900 md:text-lg">
                  {loc.name}
                </span>
                <span className="block text-xs text-gray-400 transition-colors duration-300 group-hover:text-[#23c1eb]">
                  Enquire now
                </span>
              </span>

              {/* arrow */}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#23c1eb] group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </motion.button>
          ))}
        </div>

        {/* property types */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {PROPERTY_TYPES.map((t) => (
            <span key={t} className="rounded-full border border-[#23c1eb]/30 bg-white px-4 py-1.5 text-sm font-medium text-[#8B4A1F]">
              {t}
            </span>
          ))}
        </div>

        {/* couple image (from /public) */}
        <div className="mt-8 flex justify-center">
          <img
            src={coupleImg}
            alt="Save Time & Money with Fully Furnished Concept"
            className="w-full max-w-7xl object-contain"
          />
        </div>
      </div>

      <AnimatePresence>
        {selected && <LocationModal location={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
