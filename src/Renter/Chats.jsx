import React, { useEffect, useState, useRef, use } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchSharp, IoCheckmarkDoneSharp, IoSettingsOutline } from "react-icons/io5";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import vite from "../../public/vite.svg"
import { IoSearch } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import api from '../api'
import Message from "./Messages";
import { Link, Outlet } from "react-router-dom";



// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//     return null;
// }


function Chats() {

    // const currentUser = localStorage.getItem('username')


    // const socketRef = useRef(null);
    // const [messages, setMessages] = useState([]);
    // const [input, setInput] = useState("");
    const [groups, setgroups] = useState([])

    useEffect(() => {
        api.get('private/rooms/', {withCredentials: true})
        .then(res => {
            setgroups(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    // useEffect(() => {

    //       api.get('chatview', {withCredentials: true})
    //         .then(res => setMessages(res.data))
    //         .catch(err => {
    //             console.log(err.message)
    //         })

    //     const accessToken = getCookie('access_token')
    //     // console.log("Sending token:", accessToken);
    //     socketRef.current = new WebSocket(`ws://127.0.0.1:8000/ws/chat/Public-chat/?token=${accessToken}`)

    //     socketRef.current.onmessage = (event) => {
    //         const data = JSON.parse(event.data)
    //         setMessages((prev) => [...prev, data])

    //     }

    //     return () => socketRef.current.close()
    // }, []);

    // const sendMessage = (e) => {
    //     e.preventDefault();
    //     if (socketRef.current.readyState === WebSocket.OPEN) {
    //         socketRef.current.send(JSON.stringify({ body: input }));
    //         setInput('');
    //     }
    // };


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
                                        <img src={vite} className="border-2 rounded-[100%]" alt="" />

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







            {/* Right side */}
            {/* <div className="bg-[#013a63] flex flex-col justify-between h-[650px] w-full max-w-[600px] rounded-[5px]"> */}

                {/* <div> */}
                    <Outlet/>
                    {/* Top */}
                    {/* <div className="flex items-center justify-between px-3 py-2 border-b-2"> */}

                        {/* Top left side */}
                        {/* <div className="flex items-center gap-5">
                            <img src={vite} alt="vite" className="border-2 rounded-[100%]" />

                            <div className="flex flex-col items-start">
                                <h1 className="font-bold">{localStorage.getItem('username')}</h1>
                                <p className="text-[13px]">Last seen 1 minute ago</p>
                            </div>

                        </div> */}

                        {/* Top right icons */}
                        {/* <div className="flex items-center gap-5">
                            <FaPhoneAlt className="cursor-pointer hover:text-[#2279b7]" />
                            <FaVideo className="cursor-pointer hover:text-[#2279b7]" />
                            <IoSearch className="cursor-pointer hover:text-[#2279b7]" />
                        </div>

                    </div> */}




                    {/* Messages */}
                    {/* <div className="flex flex-col p-4 h-[500px] overflow-y-auto">
                        {messages.map((msg, index) => (
                            <Message
                                key={index}
                                message={msg}
                                currentUser={currentUser}
                            />
                        ))}
                    </div>

                </div> */}


                {/* Bottom bar */}
                {/* <form onSubmit={sendMessage} className="px-3 py-2">
                    <div className="py-1 relative flex items-center">
                        <textarea
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter your message here"
                            className="rounded-[5px] resize-none wrap-break-word w-full h-auto max-w-full px-3 py-2 focus:outline-none bg-[#03045e]" />
                        <button type="submit">
                            <IoSend className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
                        </button>
                    </div>

                </form> */}



            {/* </div> */}
        </div>
    )
}

export default Chats