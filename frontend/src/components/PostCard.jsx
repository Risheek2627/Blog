// PostCard.jsx
export default function PostCard({ title, content }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mb-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <button className="mt-4 text-blue-500 hover:underline">Read More</button>
    </div>
  );
}
