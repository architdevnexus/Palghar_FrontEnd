// VisionCard.jsx
export default function VisionCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl transition-shadow bg-white">
      <img
        src={image}
        alt={title}
        className="rounded-md w-60 h-42 object-cover mb-3"
        loading="lazy"
      />
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
