import React, { useEffect, useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiCalendar,
  FiDollarSign,
  FiClock,
  FiEye,
  FiUser,
  FiSearch,
} from "react-icons/fi";
import api, { apiurl } from "../api";
import self from "../assets/self.jpg";
import home from "../assets/home.jpg"


const ProfilePage  = () => {
  const [userinfo, setuserinfo] = useState({});
  const [activity, setactivity] = useState([])

  useEffect(() => {
    apiurl
      .get("get_my_profile", { withCredentials: true })
      .then((res) => setuserinfo(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    api.get('get_user_activity')
    .then(res => {
      setactivity(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])

  const stats = [
    {
      title: "Saved Homes",
      value: "12",
      icon: <FiHeart />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Messages",
      value: "4",
      icon: <FiMessageCircle />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Viewed",
      value: "18",
      icon: <FiEye />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Profile Score",
      value: "78%",
      icon: <FiUser />,
      color: "bg-green-100 text-green-600",
    },
  ];


  const savedHomes = [
    {
      title: "Modern Apartment",
      city: "Tashkent",
      price: "$145,000",
      image:
        {home},
    },
    {
      title: "Luxury Villa",
      city: "Samarkand",
      price: "$310,000",
      image:
        {home},
    },
  ];

  // const activity = [
  //   "Saved apartment in Chilanzar",
  //   "Messaged property owner",
  //   "Booked viewing for Friday",
  //   "Updated search filters",
  // ];

  return (
    <div className="p-4 md:p-8 bg-slate-100 min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Top Left Profile */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-md p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <img
              src={self}
              alt="profile"
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Hi, {userinfo?.name_user || "User"} 👋
              </h1>
              <p className="text-gray-500 mt-1">
                Welcome back to your real estate dashboard
              </p>

              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <span className="bg-slate-100 px-3 py-1 rounded-full">
                  {userinfo?.city || "Tashkent"}
                </span>
                <span className="bg-slate-100 px-3 py-1 rounded-full">
                  Real Estate User • Buyer / Seller Activity Dashboard
                </span>
                <span className="bg-slate-100 px-3 py-1 rounded-full">
                  Joined 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Right Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${item.color}`}
              >
                {item.icon}
              </div>

              <p className="text-gray-500 text-sm mt-4">{item.title}</p>
              <h1 className="text-2xl font-bold text-gray-800">
                {item.value}
              </h1>
            </div>
          ))}
        </div>

        {/* Bottom Left Saved Homes */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-md p-6">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl font-bold text-gray-800">Saved Homes</h1>
            <button className="text-blue-600 font-medium text-sm">
              View All
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {savedHomes.map((home, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-slate-50 hover:shadow-lg transition"
              >
                <img
                  src={home.image}
                  alt={home.title}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <h2 className="font-bold text-lg">{home.title}</h2>
                  <p className="text-gray-500 text-sm">{home.city}</p>
                  <h3 className="text-blue-600 font-bold mt-2">
                    {home.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Right Activity */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h1 className="text-xl font-bold text-gray-800 mb-5">
            Recent Activity
          </h1>

          <div className="space-y-4">
            {activity.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <FiClock />
                </div>

                <div>
                  <p className="text-gray-700">{item.metadata.title}</p>
                  <span className="text-xs text-gray-400">
                    {item.created_at}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Search Preferences */}
          <div className="mt-8">
            <h2 className="font-bold text-gray-800 mb-3">
              Search Preferences
            </h2>

            <div className="space-y-2 text-sm">
              <div className="bg-slate-100 px-3 py-2 rounded-xl flex items-center gap-2">
                <FiSearch />
                Tashkent • Rent
              </div>

              <div className="bg-slate-100 px-3 py-2 rounded-xl">
                2 Rooms • $500 max
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;