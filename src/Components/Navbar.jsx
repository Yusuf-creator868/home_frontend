import { useRef, useState } from "react";
import { FaBell, FaHeart, FaUser } from "react-icons/fa6";
import { useAuth } from "../Contexts/useAuth";
import { logout } from "../api";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { Auth, setAuth } = useAuth();
  const nav = useNavigate();


  // controls visibility
  const [showProfileBox, setShowProfileBox] = useState(false);
  // ref to store timeout id for delayed hide
  const hideTimeoutRef = useRef(null);


//   Logout here

  const logoutbutton = async () => {
    const success = await logout()
    if (success) {
        setShowProfileBox(false);
        setAuth(false)
        localStorage.removeItem("username")
        nav("login");
    }
  };




  // helper: show immediately and clear any pending hide timer
  const handleShow = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowProfileBox(true);
  };

  // helper: hide with a small delay (200ms)
  const handleHide = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowProfileBox(false);
      hideTimeoutRef.current = null;
    }, 200); // 200ms delay — tweak if you want longer
  };





  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-[1400px] z-40">
      <div className="mx-4 rounded-[10px] backdrop-blur-lg bg-blue-950/90 border border-blue-900 shadow-lg">
        <div className="flex justify-between items-center h-13 mx-10">
          <a href="/" className="font-mono text-xl font-bold text-white">
            Home<span className="text-blue-500">.rent</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </a>

            {Auth ? null : (
              <a href="/login" className="text-gray-300 hover:text-blue-400 transition-colors">
                Login
              </a>
            )}
            {Auth ? null : (
              <a href="/register" className="text-gray-300 hover:text-blue-400 transition-colors">
                Register
              </a>
            )}

            <a href="/favorites" className="text-gray-300 hover:text-blue-300 transition-colors">
              <FaHeart />
            </a>

            <a href="#home" className="text-gray-300 hover:text-blue-300 transition-colors">
              <FaBell />
            </a>

            {/* WRAPPER: both trigger and dropdown inside same element */}
            <div
              className="relative"
              onMouseEnter={handleShow}
              onMouseLeave={handleHide}
            >
              {/* TRIGGER (use button/div, avoid href to prevent focus/navigation) */}
             {Auth ? <div
                role="button"
                tabIndex={0}
                onFocus={handleShow}    // keyboard accessibility
                onBlur={handleHide}
                className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors cursor-pointer select-none"
              >
                <FaUser /> <span>Your profile</span>
              </div> : null}

              {/* DROPDOWN */}
              <div
                // position right-0 so it aligns; use top-full to sit directly under trigger (no gap)
                className={`absolute right-0 top-full mt-2 w-56 bg-gray-200 text-gray-900 rounded-2xl shadow-lg overflow-hidden z-50 transform transition-all duration-200 origin-top-right ${
                  showProfileBox
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
                // also ensure that the dropdown itself keeps the hover alive (it's inside wrapper)
              >
                {/* Top section */}
                <div className="flex items-center space-x-3 p-4 border-b border-gray-300">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsyqbhHhVGJ8pKqVAjeHvXvluuSE2WTaYGGPOIeEWUnINhvSaGxIURvhw3-NgrbNhkzg&usqp=CAU"
                    alt="User profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{localStorage.getItem("username")}</p>
                    <p className="text-sm text-gray-600">id</p>
                  </div>
                </div>

                {/* Menu items */}
                <div className="text-sm flex flex-col justify-start">
                <Link to="/profile/overview" className="px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer transition">
                    Profile
                  </Link>
                  <Link to="/profile/posts" className="px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer transition">
                    Posts
                  </Link>
                  <Link to="/profile/payments" className="px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer transition">
                    Payments
                  </Link>
                  <Link to="/profile/chats" className="px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer transition">
                    Chat
                  </Link>
                  <Link to="/profile/settings" className="px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer transition">
                    Settings
                  </Link>
                </div>

                {/* Exit */}
                <div className="border-t border-gray-300 px-4 py-2 text-center text-gray-800 hover:bg-red-500 hover:text-white cursor-pointer transition"
                    onClick={logoutbutton}
                >
                  Exit
                </div>
              </div>
            </div>
            {/* end wrapper */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;