// // PostCard.jsx
// export default function PostCard({ title, content }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-5 mb-6 hover:shadow-xl transition duration-300">
//       <h2 className="text-2xl font-semibold text-blue-500 mb-3">{title}</h2>
//       <p className="text-gray-700">{content}</p>
//       <button className="mt-4 text-blue-500 hover:underline">Read More</button>
//     </div>
//   );
// }

// todo after cloudinary
export default function PostCard({ title, content, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mb-6 hover:shadow-xl transition duration-300">
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <button className="mt-4 text-blue-500 hover:underline">Read More</button>
    </div>
  );
}
