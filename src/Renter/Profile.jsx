import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { BsChatSquareDots } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

export const Profile = () => {
  const location = useLocation();
  const currentTab = location.pathname.split("/")[2];

  const [collapsed, setCollapsed] = useState(false);

  const linkStyle = (name) =>
    currentTab === name
      ? "bg-blue-600 text-white shadow-lg flex items-center gap-3 px-4 py-3 rounded-xl w-full transition-all duration-300"
      : "text-gray-300 hover:text-white hover:bg-white/10 flex items-center gap-3 px-4 py-3 rounded-xl w-full transition-all duration-300";

  return (
    <div className="flex bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen">

      {/* Sidebar */}
      <div
        className={`flex flex-col justify-between h-screen fixed p-5 text-white bg-blue-950 rounded-r-3xl shadow-2xl transition-all duration-300 ${collapsed ? "w-[95px]" : "w-[300px]"
          }`}
      >
        {/* Top */}
        <div className="flex flex-col items-start text-[20px] space-y-3 w-full">

          {/* Logo + Toggle */}
          <div className="flex items-center justify-between w-full mb-16">
            {!collapsed && (
              <h1 className="text-4xl font-bold tracking-wide">
                Home<span className="text-blue-500">.uz</span>
              </h1>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl transition"
            >
              {collapsed ? "➜" : "⬅"}
            </button>
          </div>

          {/* Links */}
          <Link to="overview" className={linkStyle("overview")}>
            <GrOverview className="text-xl min-w-[22px]" />
            {!collapsed && <span>Overview</span>}
          </Link>

          <Link to="posts" className={linkStyle("posts")}>
            <IoHomeOutline className="text-xl min-w-[22px]" />
            {!collapsed && <span>Listings</span>}
          </Link>

          <Link to="payments" className={linkStyle("payments")}>
            <MdPayment className="text-xl min-w-[22px]" />
            {!collapsed && <span>Payments</span>}
          </Link>

          <Link to="chats" className={linkStyle("chats")}>
            <BsChatSquareDots className="text-xl min-w-[22px]" />
            {!collapsed && <span>Chat</span>}
          </Link>

          <Link to="agents" className={linkStyle("agents")}>
            <BsPersonVcard className="text-xl min-w-[22px]" />
            {!collapsed && <span>Agents</span>}
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start text-[20px] space-y-3 w-full">

          <Link to="messages" className={linkStyle("messages")}>
            <LuMessageSquarePlus className="text-xl min-w-[22px]" />
            {!collapsed && <span>Messages</span>}
          </Link>

          <Link to="settings" className={linkStyle("settings")}>
            <IoSettingsOutline className="text-xl min-w-[22px]" />
            {!collapsed && <span>Settings</span>}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full mr-[10px] transition-all duration-300 ${collapsed ? "ml-[115px]" : "ml-[320px]"
          }`}
      >
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};