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

  const linkStyle = (name) =>
    currentTab === name
      ? "text-white flex justify-center items-center gap-3 cursor-pointer"
      : "text-gray-300 hover:text-white flex justify-center items-center gap-3 cursor-pointer";

  return (
    
    <div className="flex bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen">

      <div className="flex flex-col items-center justify-between w-[300px] border-2 h-screen fixed p-5 text-white bg-blue-950 rounded-2xl">

        <div className="flex flex-col items-start text-[20px] space-y-3">
          <h1 className="text-4xl mb-20">Home<span className="text-blue-500">.uz</span></h1>

          <div className={linkStyle("overview")}>
            <GrOverview/>
            <Link to="overview" >Overview</Link>
          </div>

          <div  className={linkStyle("posts")}>
            <IoHomeOutline/>
            <Link to="posts" >Listings</Link>
          </div>

          <div className={linkStyle("payments")}>
            <MdPayment/>
            <Link to="payments">Payments</Link>
          </div>

          <div className={linkStyle("chats")}>
            <BsChatSquareDots/>
            <Link to="chats">Chat</Link>
          </div>

          <div  className={linkStyle("agents")}>
            <BsPersonVcard/>
            <Link to="agents">Agents</Link>
          </div>

        </div>



        <div className="flex flex-col items-start text-[20px] space-y-3">

          <div className={linkStyle("messages")}>
            <LuMessageSquarePlus/>
            <Link to="messages" >Messages</Link>
            <p className="bg-amber-700 rounded-full w-8 h-8 text-center">4</p>
          </div>

          <div className={linkStyle("settings")}>
            <IoSettingsOutline/>
            <Link to="settings">Settings</Link>
          </div>
         
        </div>

      </div>
      



    <div className="ml-[320px] mr-[10px] mt-2 max-w-[1300px] w-full rounded-2xl shadow-md shadow-black/70">


      <div className="mt-10">
        <Outlet />
      </div>
    </div>


  </div>
  );
};