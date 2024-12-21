import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons
import axios from "axios";
const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      axios
        .get(`http://localhost:5000/api/search?query=${query}`)
        .then((response) => {
          setSearchResults(response.data.posts);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]); // Clear search results if query is empty
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        className="flex-grow p-2 outline-none"
      />
      <button onClick={handleSearch} className="text-gray-500">
        <FaSearch size={20} /> {/* Search icon */}
      </button>
    </div>
  );
};

export default SearchBar;
