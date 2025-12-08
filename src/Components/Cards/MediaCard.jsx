export default function MediaCard({ item }) {
    return (
        <div
            className="
                relative w-full h-80 rounded-2xl overflow-hidden group cursor-pointer
                transition-transform duration-500
                hover:scale-[1.02]
            "
            style={{
                backgroundImage: `url(${item?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Background Zoom on Hover */}
            <div
                className="
                    absolute inset-0 bg-cover bg-center transition-transform duration-500
                    group-hover:scale-110
                "
                style={{ backgroundImage: `url(${item?.image})` }}
            ></div>

            {/* Dark Glass Overlay */}
            <div
                className="
                    absolute inset-0 bg-black/10 
                    group-hover:bg-black/70 
                    
                    transition-all duration-500
                "
            ></div>

            {/* Premium Corner Frame */}
            <div className="absolute inset-4 rounded-xl border border-white/30">
                {/* corners */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-white/60 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-white/60 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-white/60 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-white/60 rounded-br-lg"></div>
            </div>

            {/* Text Content */}
            <div
                className="
                    absolute inset-0 flex flex-col items-center justify-center text-center px-4
                    text-white opacity-0 group-hover:opacity-100 
                    transition-all duration-500 transform group-hover:translate-y-0 translate-y-4
                "
            >
                <h2 className="text-2xl font-semibold tracking-wide drop-shadow-lg">
                    {item?.title}
                </h2>

                <p className="text-sm mt-2 opacity-90 max-w-xs leading-relaxed drop-shadow-md">
                    {item?.subtitle}
                </p>

                {/* Details */}
                <div className="mt-4 flex items-center justify-center gap-4 text-sm opacity-90 flex-wrap">
                    {Object.values(item?.details || {}).map((value, i) => (
                        <span
                            key={i}
                            className="
                                px-3 py-1 bg-white/20 rounded-full backdrop-blur-md
                                border border-white/30 text-xs
                            "
                        >
                            {value}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
