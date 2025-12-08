export default function ElementsTogether() {

    const Data = [
        {
            "title": "Reduce transport costs",
            "description": "Lower travel and logistics expenses through efficient infrastructure and planning.",
            "image": "/01.svg"
        },
        {
            "title": "Improve accessibility",
            "description": "Enhance connectivity for people and goods across regions.",
            "image": "/02.svg"
        },
        {
            "title": "Support sustainable development",
            "description": "Promote eco-friendly transport systems that reduce environmental impact.",
            "image": "/03.svg"
        },
        {
            "title": "Drive economic growth",
            "description": "Strengthen trade, commerce, and overall economic productivity.",
            "image": "/04.svg"
        },
        {
            "title": "Create jobs",
            "description": "Generate employment opportunities through transport projects and related industries.",
            "image": "/05.svg"
        },
        {
            "title": "Enhance quality of life",
            "description": "Improve mobility, safety, and convenience for citizens.",
            "image": "/06.svg"
        }
    ];

    const Item = ({ image, title }) => {
        return (
            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                <img src={image} alt={title} className="w-12 h-12 object-contain" />
                <span className="font-semibold text-base md:text-lg text-(--black-color)">
                    {title}
                </span>
            </div>
        );
    };

    return (
        <section className="w-full py-12 px-6 md:px-10 lg:px-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--black-color) mb-10 text-center md:text-left">
                These elements work together to:
            </h2>

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                "
            >
                {Data.map((item, index) => (
                    <Item
                        key={index}
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </div>
        </section>
    );
}
