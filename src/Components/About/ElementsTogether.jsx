export default function ElementsTogether() {

    const Data = [
        {   
            "title": "Reduce transport costs", 
            "description": "Lower travel and logistics expenses through efficient infrastructure and planning.", 
            "number": "01" },
        { 
            "title": "Improve accessibility", 
            "description": "Enhance connectivity for people and goods across regions.", 
            "number": "02" },
        { 
            "title": "Support sustainable development", 
            "description": "Promote eco-friendly transport systems that reduce environmental impact.", 
            "number": "03" },
        { 
            "title": "Drive economic growth", 
            "description": "Strengthen trade, commerce, and overall economic productivity.", 
            "number": "04" },
        { 
            "title": "Create jobs", 
            "description": "Generate employment opportunities through transport projects and related industries.", 
            "number": "05" },
        { 
            "title": "Enhance quality of life", 
            "description": "Improve mobility, safety, and convenience for citizens.", 
            "number": "06" }
    ];

    const NumberBadge = ({ number, id }) => (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
        >
            <defs>
                <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6ee7f7" />
                    <stop offset="100%" stopColor="#23c1eb" />
                </linearGradient>
            </defs>
            <rect width="48" height="48" rx="10" fill={`url(#grad-${id})`} />
            <text
                x="24"
                y="33"
                textAnchor="middle"
                fontSize="20"
                fontWeight="700"
                fill="white"
                fontFamily="inherit"
            >
                {number}
            </text>
        </svg>
    );

    const Item = ({ number, title, id }) => {
        return (
            <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                <NumberBadge number={number} id={id} />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Data.map((item, index) => (
                    <Item
                        key={index}
                        id={index}
                        number={item.number}
                        title={item.title}
                    />
                ))}
            </div>
        </section>
    );
}