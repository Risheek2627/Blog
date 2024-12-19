// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 mt-10">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2024 My Blog. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer
      className="text-black font-bold py-4 mt-10"
      style={{
        backgroundImage: "linear-gradient(to right, #dce0d9, #fbf6ef, #ead7c3)",
      }}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
