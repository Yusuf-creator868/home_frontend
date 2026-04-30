import home from "../assets/home.jpg"
import { useState, useEffect } from "react";
import api, { MAIN_URL } from "../api"
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";



function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounced;
}


export default function Hero() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, settype] = useState(null)
  const [price, setprice] = useState(null)
  const [area, setarea] = useState(null)

  const typeOptions = [
    { value: "rent", label: "Rent" },
    { value: "sale", label: "Sale" },
  ];

  const priceOptions = [
    { value: "0-500", label: "$0 - $500" },
    { value: "500-1000", label: "$500 - $1000" },
    { value: "1000-5000", label: "$1000 - $5000" },
  ];

  const areaOptions = [
    { value: "tashkent", label: "Tashkent" },
    { value: "andijan", label: "Andijan" },
    { value: "bukhara", label: "Bukhara" },
    { value: "fergana", label: "Fergana" },
    { value: "jizzakh", label: "Jizzakh" },
    { value: "khorezm", label: "Khorezm" },
    { value: "namangan", label: "Namangan" },
    { value: "navoi", label: "Navoi" },
    { value: "kashkadarya", label: "Kashkadarya" },
    { value: "samarkand", label: "Samarkand" },
    { value: "syrdarya", label: "Syrdarya" },
  ];

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    fetchResults();
  }, [debouncedQuery]);

  const fetchResults = async () => {
    try {
      setLoading(true);

      const res = await api.get("/api/search", {
        params: { q: debouncedQuery },
      });

      setResults(res.data);
      console.log(res.data)
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div className="relative p-4">
        <img
          src={home}
          alt="home"
          className="w-full h-[700px] object-cover max-w-[1500px] mx-auto brightness-45 rounded-2xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="max-w-[500px] font-bold text-3xl">Perfect Firm For Selling or Leasing Houses, Flats, And Villas</h1>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between w-full max-w-[900px] bg-white text-black
                  p-4 sm:p-5
                    rounded-[10px]">
            {/* Type */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]">Type</h1>
              <Select
                options={typeOptions}
                onChange={(option) => settype(option)}
                className="w-35"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]">Price</h1>
              <Select
                options={priceOptions}
                onChange={(option) => setprice(option)}
                className="w-35"
              />
            </div>

            {/* Area */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[20px]">Area</h1>
              <Select
                options={areaOptions}
                onChange={(option) => setarea(option)}
                className="w-35"
              />
            </div>

            {/* Search */}
            <div className="text-amber-50 bg-blue-950 flex items-center gap-2 py-2 px-5 rounded-[10px] cursor-pointer">
              <IoSearchOutline />
              <h1>Search</h1>
            </div>

          </div>

        </div>
      </div>








      <div className="w-full max-w-xl mx-auto my-10">

        {/* Search Box */}
        <div className="relative">
          <input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                 transition"
          />

          {/* Loading indicator */}
          {loading && (
            <p className="absolute right-3 top-3 text-sm text-gray-400">
              Loading...
            </p>
          )}
        </div>

        {/* Results */}
        <div className="mt-4 bg-white rounded-xl shadow-md overflow-hidden">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 px-4 py-3 border-b last:border-none hover:bg-gray-50 transition cursor-pointer"
              >
                {/* Image */}
                <img
                  src={`${MAIN_URL}${item.first_image}`}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <p className="text-gray-800 font-semibold">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.district}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            query && !loading && (
              <p className="p-4 text-gray-400 text-sm">No results found</p>
            )
          )}
        </div>

      </div>

    </div>
  );
}