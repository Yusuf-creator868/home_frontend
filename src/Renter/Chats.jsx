import React, { useEffect, useState, useRef, use } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchSharp, IoCheckmarkDoneSharp, IoSettingsOutline } from "react-icons/io5";
import { BsChatSquareDotsFill } from "react-icons/bs";
import api from '../api'
import { Link, Outlet } from "react-router-dom";





function Chats() {


    const [groups, setgroups] = useState([])

    useEffect(() => {
        api.get('private/rooms/', {withCredentials: true})
        .then(res => {
            setgroups(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])




    return (
        <div className="flex justify-center items-center text-amber-50">

            {/* Left side */}
            <div className="bg-[#03045e] w-full max-w-[400px] rounded-[5px]">

                {/* Chats ... */}
                <div className="flex items-center justify-between px-3 py-2">
                    <h1 className="text-2xl font-bold">Chats</h1>
                    <BsThreeDotsVertical />
                </div>

                {/* Search input */}
                <div className="flex items-center relative p-2">
                    <IoSearchSharp className="absolute left-5" />
                    <input type="text" className="border-2 border-white rounded-[5px] w-full pl-8 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-950" placeholder="Search" />
                </div>


                {/* Connections */}
                <div className="h-[500px] overflow-y-scroll">
              
                    {
                        groups.map((prev, key) => {
                            return (
                                <Link to={`chat/${prev.id}`} key={key} className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-[#014f86]">
                                    <div className="flex items-center gap-2">
                          

                                        <div className="flex flex-col items-start justify-start">
                                            <h1 className="font-bold">{prev.other_user.username}</h1>
                                        </div>

                                    </div>

                                    <h1>15:15</h1>
                                </Link>
                            )
                        })
                    }
                
              


                </div>

                {/* Bottom bar */}
                <div className="grid grid-cols-2 place-items-center border-t-2 px-3 py-2">
                    <div className="flex flex-col items-center justify-center hover:text-[#2279b7] cursor-pointer w-0">
                        <BsChatSquareDotsFill />
                        <h1 className="text-[13px]">Chats</h1>
                    </div>

                    <div className="flex flex-col items-center justify-center hover:text-[#2279b7] cursor-pointer w-0">
                        <IoSettingsOutline />
                        <h1 className="text-[13px]">Settings</h1>
                    </div>

                </div>

            </div>





                    <Outlet/>
                  
        </div>
    )
}

export default Chats