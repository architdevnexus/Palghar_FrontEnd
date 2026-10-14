import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import areaImg from "../../../public/Area.png"; // put area.png in src/assets/

/* ---------------- DATA ----------------
   Every location uses area.png.
   To give one location its own photo, add  img: "/locations/vasai.jpg"  (file in /public) */
// one colour for every location (change it here)
const BRAND = "#23c1eb";

const LOCATIONS = [
  { name: "Vada", color: BRAND },
  { name: "Mira Road", color: BRAND },
  { name: "Bhayandar", color: BRAND },
  { name: "Naigaon", color: BRAND },
  { name: "Vasai", color: BRAND },
  { name: "Virar", color: BRAND },
  { name: "Vaitarna", color: BRAND },
  { name: "Saphale", color: BRAND },
  { name: "Kelva Road", color: BRAND },
  { name: "Palghar", color: BRAND },
  { name: "Umroli", color: BRAND },
  { name: "Boisar", color: BRAND },
  { name: "Vangaon", color: BRAND },
  { name: "Dahanu Road", color: BRAND },
];

const PROPERTY_TYPES = [
  "Residence",
  "Commercial Area",
  "Open Plot",
  "Bungalow",
  "Warehouse",
  "Industrial Area",
];

const BHK_OPTIONS = ["1", "2", "3", "4", "5"];

// Your enquiry API only knows these 3 types, so we map ours onto them
// (the exact choice is always sent in the message as well)
const ENQUIRY_TYPE = {
  Residence: "Residential",
  Bungalow: "Residential",
  "Commercial Area": "Commercial",
  "Open Plot": "Investment",
  Warehouse: "Investment",
  "Industrial Area": "Investment",
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Every enquiry is also emailed to this address (via FormSubmit.co).
// Change it here whenever you want a different inbox.
const NOTIFY_EMAIL = "akanksharai22feb@gmail.com";

/* ---------------- POPUP ---------------- */
function LocationModal({ location, onClose }) {
  const [type, setType] = useState("All");
  const [bhk, setBhk] = useState("All");
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
      type === "Residence" ? `BHK: ${bhk === "All" ? "All" : `${bhk} BHK`}` : null,
      form.note ? `Note: ${form.note}` : null,
    ].filter(Boolean);

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      city: location.name,
      enquiryType: ENQUIRY_TYPE[type] || "Investment",
      message: lines.join("\n"),
      countryCode: "+91",
    };

    setStatus({ state: "sending", msg: "" });

    // 1) email straight to NOTIFY_EMAIL
    const sendMail = fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New enquiry: ${location.name} - ${type}`,
        _template: "table",
        _captcha: "false",
        Name: form.name,
        Phone: `+91 ${form.phone}`,
        email: form.email,
        Location: location.name,
        "Property type": type,
        ...(type === "Residence" ? { BHK: bhk === "All" ? "All" : `${bhk} BHK` } : {}),
        Note: form.note || "-",
      }),
    }).then(async (r) => {
      const d = await r.json().catch(() => null);
      if (!r.ok || d?.success === "false" || d?.success === false) {
        throw new Error(d?.message || "Email failed");
      }
    });

    // 2) save it in your backend too (same as the Enquire form)
    const saveBackend = fetch(`${BASE_URL}/api/enquiry/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    }).then((r) => {
      if (!r.ok) throw new Error("Backend save failed");
    });

    const [mail, backend] = await Promise.allSettled([sendMail, saveBackend]);
    if (mail.status === "rejected") console.error("Email error 👉", mail.reason);
    if (backend.status === "rejected") console.error("Backend error 👉", backend.reason);

    if (mail.status === "fulfilled" || backend.status === "fulfilled") {
      setStatus({ state: "done", msg: "" });
    } else {
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
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: location.color }} />
            Selected location
          </p>
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
                    onClick={() => {
                      setType(t);
                      setBhk("All");
                    }}
                    className={pill(type === t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* BHK */}
            {type === "Residence" && (
              <div>
                <p className="mb-2 font-semibold text-gray-800">BHK</p>
                <div className="flex flex-wrap gap-2">
                  {["All", ...BHK_OPTIONS].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBhk(b)}
                      className={pill(bhk === b)}
                    >
                      {b === "All" ? "All" : `${b} BHK`}
                    </button>
                  ))}
                </div>
              </div>
            )}

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

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Palghar Growth Partner LLP
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] md:text-6xl">
                Where do you want to <span className="text-[#FFE27A]">own?</span>
              </h1>
              <p className="mt-4 text-white/85 md:text-lg">
                Pick an area, tell us what you need. Residence, plots, warehouses and more.
              </p>
            </div>

            <a
              href={`tel:+91${HOTLINE}`}
              className="flex items-center gap-4 self-start rounded-2xl bg-white px-5 py-4 text-[#0B6E8E] shadow-lg transition hover:scale-[1.03] md:self-center"
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
        </motion.div>

        {/* ---------- LOCATION IMAGE CARDS ---------- */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {LOCATIONS.map((loc, i) => (
            <motion.button
              key={loc.name}
              type="button"
              onClick={() => setSelected(loc)}
              style={{ "--c": loc.color }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-3xl bg-white text-left shadow-md transition-shadow duration-300 hover:shadow-[0_20px_40px_-14px_var(--c)]"
            >
              {/* image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={loc.img || areaImg}
                  alt={loc.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {/* tint so each location keeps its own colour */}
                <div className="absolute inset-0 bg-(--c) opacity-25 mix-blend-multiply" />
              </div>

              {/* readability gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* coloured bottom line */}
              <span className="absolute inset-x-0 bottom-0 h-1.5 bg-(--c)" />

              {/* text */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                <div>
                  <p className="text-lg font-bold leading-tight text-white md:text-2xl">{loc.name}</p>
                  <p className="mt-0.5 text-xs text-white/80 md:text-sm">Enquire now</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 transition-all duration-300 group-hover:rotate-45 group-hover:bg-(--c) group-hover:text-white md:h-11 md:w-11">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* property types */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[...PROPERTY_TYPES, "1-5 BHK"].map((t) => (
            <span key={t} className="rounded-full border border-[#23c1eb]/30 bg-white px-4 py-1.5 text-sm font-medium text-[#8B4A1F]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <LocationModal location={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
