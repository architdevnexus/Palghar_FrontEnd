export default function MediaHero() {
    return (
        <div
            className="relative mx-auto h-[50vh] md:h-[60vh] w-[95%] rounded-2xl bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('/bg.svg')",
                // borderRadius:"20%"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20  rounded-2xl"></div>

            {/* Centered Title Box */}
            <div className="relative z-10 px-10 py-6 h-40 w-1/2 flex items-center justify-center bg-(--primary-color)
                            text-white text-4xl md:text-6xl font-semibold
                            rounded-2xl border-4 md:border-8 border-white shadow-xl">
                Media
            </div>
        </div>
    );
}
