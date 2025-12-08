import Datas from "../../DataStore/blogs.json";
import { useNavigate } from "react-router-dom";

export default function TrendingBlog() {
    const Data = Datas?.Data;
    const navigate = useNavigate();

    const Item = ({ item }) => {
        return (
            <div
                onClick={() => navigate(`/blog/${item.id}`)}
                className="flex items-start gap-3 cursor-pointer hover:opacity-80 transition-all"
            >
                {/* Thumbnail */}
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover"
                />

                {/* Blog text */}
                <div className="flex flex-col">
                    <span className="font-semibold text-sm leading-tight">
                        {item.title.length > 28
                            ? item.title.slice(0, 28) + " ..."
                            : item.title}
                    </span>

                    <span className="italic text-xs text-gray-500 mt-1">
                        {item.date}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className="
            p-4 border-2 border-(--primary-color) 
            rounded-2xl bg-white relative w-full
        ">

            {/* Top badge header */}
            <div className="
                bg-(--primary-color) text-white font-semibold 
                text-lg px-4 py-3 rounded-2xl 
                flex items-center gap-2 absolute 
                -top-6 left-6 shadow-md
            ">
                <span className="h-6 w-2 bg-(--secondary-color) rounded-full"></span>
                Trending Posts
            </div>

            {/* Wrapper Box */}
            <div className="mt-10 border-l-4 border-(--primary-color) pl-4">

                {/* Scrollable Area */}
                <div className="flex flex-col gap-6 max-h-[520px] overflow-y-auto pr-2 scrollbar-hide">
                    {Data.slice(0, 10).map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </div>
    );
}
