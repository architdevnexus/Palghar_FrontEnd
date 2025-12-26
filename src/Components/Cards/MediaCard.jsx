export default function MediaCard({ item }) {
  const imageUrl = item?.images?.[0]?.url;

  return (
    <div
      className="
        relative w-full h-80 rounded-2xl overflow-hidden group cursor-pointer
        transition-transform duration-500 hover:scale-[1.02]
      "
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Zoom */}
      <div
        className="
          absolute inset-0 bg-cover bg-center transition-transform duration-500
          group-hover:scale-110
        "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0 bg-black/20 group-hover:bg-black/70
          transition-all duration-500
        "
      />

      {/* Premium Frame */}
      <div className="absolute inset-4 rounded-xl border border-white/30">
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-white/60 rounded-tl-lg" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-white/60 rounded-tr-lg" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-white/60 rounded-bl-lg" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-white/60 rounded-br-lg" />
      </div>

      {/* Content */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center
          text-white text-center px-4
          opacity-0 group-hover:opacity-100
          transition-all duration-500 translate-y-4 group-hover:translate-y-0
        "
      >
        <h2 className="text-2xl font-semibold drop-shadow-lg">
          {item?.name}
        </h2>

        <p className="text-sm mt-2 opacity-90 max-w-xs drop-shadow-md">
          {item?.location?.area}, {item?.location?.city}
        </p>

        {/* Details */}
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
          <span className="px-3 py-1 bg-white/20 rounded-full border border-white/30">
            {item?.config}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full border border-white/30">
            {item?.type}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full border border-white/30">
            {item?.category}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full border border-white/30">
            ₹{item?.pricing?.rent_price?.toLocaleString()}/mo
          </span>
        </div>
      </div>
    </div>
  );
}
