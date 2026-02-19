import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex items-center w-full max-w-md bg-gray-800 text-gray-300 rounded-2xl px-4 py-2 shadow-md">
      <FaSearch className="text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none w-full placeholder-gray-400"
      />
    </div>
  );
}