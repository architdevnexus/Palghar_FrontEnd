export default function ModernTransportation() {
    const Data = [
        {
            title: "Expressways",
            description: "High-speed road networks that link major cities and reduce travel time.",
            image: "/highway.svg"
        },
        {
            title: "Coastal Roads",
            description: "Routes along the shoreline that connect coastal communities and support tourism and trade.",
            image: "/junction.svg"
        },
        {
            title: "Water Taxis",
            description: "Smart urban transport using waterways to reduce road congestion.",
            image: "/water-taxi.svg"
        },
        {
            title: "Economic Corridors",
            description: "Integrated transport routes that promote trade and industrial development.",
            image: "/corridor.svg"
        },
        {
            title: "RO-RO Services",
            description: "Efficient maritime systems where vehicles roll directly onto ships, reducing loading time.",
            image: "/cargo-truck.svg"
        },
        {
            title: "Track Lines",
            description: "Railway networks for both passenger and freight movement.",
            image: "/transport.svg"
        }
    ];

    const Item = ({ image, title, desc }) => {
        return (
            <div className="flex flex-col items-center text-center px-6 py-10 relative">

                {/* Icon wrapper */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#23c1eb] p-3 bg-white shadow-sm">
                    <img src={image} alt={title} className="w-8 h-8 object-contain" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-(--black-color)">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 max-w-xs">
                    {desc}
                </p>
            </div>
        );
    };

    return (
        <section className="w-full py-16 px-6 md:px-10 lg:px-20">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-(--black-color) mb-14">
                Key Components of Modern Transportation Infrastructure
            </h2>

            {/* Grid with Lines */}
            <div
                className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    relative
                    max-w-7xl mx-auto
                  
                "
            >
                {Data.map((item, index) => (
                    <div
                        key={index}
                        className="
                            border-b border-r border-gray-200
                            flex justify-center
                        "
                    >
                        <Item
                            image={item.image}
                            title={item.title}
                            desc={item.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
