export default function BlogHeader() {
    return (
        <section
            className="
                relative 
                w-[97%] 
                mx-auto 
                h-[55vh] 
                md:h-[70vh] 
                lg:h-[80vh] 
                rounded-2xl 
                overflow-hidden 
                flex 
                items-center 
                justify-end
            "
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/20"></div>

            {/* Content Box */}
            <div
                className="
                    relative 
                    bg-[#23c1eb]
                    text-white 
                    font-bold
                    border-4 
                    w-full
                    md:border-8 
                    border-white
                    rounded-2xl 
                    shadow-xl
                    px-8 
                    md:px-12 
                    h-60
                    py-10
                    text-center
                    flex items-center
                    justify-center
                    max-w-xs 
                    sm:max-w-sm 
                    md:max-w-md 
                    lg:max-w-xl
                "
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight tracking-wide">
                   Blogs
                </h1>


            </div>
        </section>
    );
}
