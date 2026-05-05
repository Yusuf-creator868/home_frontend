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
import { useParams } from "react-router-dom";
import { MAIN_URL } from "../api";


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

const Conversations = () => {

    const {conversation_id} = useParams()
    const currentUser = localStorage.getItem('username')

        const socketRef = useRef(null);
        const [messages, setMessages] = useState([]);
        const [input, setInput] = useState("");

       useEffect(() => {

          api.get(`private_messages/${conversation_id}`, {withCredentials: true})
            .then(res => setMessages(res.data))
            
            .catch(err => {
                console.log(err.message)
            })

        const accessToken = getCookie('access_token')
        // console.log("Sending token:", accessToken);
        socketRef.current = new WebSocket(`wss://${MAIN_URL}/ws/chat/${conversation_id}/`)

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setMessages((prev) => [...prev, data])

        }

        return () => socketRef.current.close()
    }, [conversation_id]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify({ body: input }));
            setInput('');
        }
    };



    return(
         <div className="bg-[#013a63] flex flex-col justify-between h-[650px] w-full max-w-[600px] rounded-[5px]">

                <div>

                    {/* Top */}
                    <div className="flex items-center justify-between px-3 py-2 border-b-2">

                        {/* Top left side */}
                        <div className="flex items-center gap-5">
                            <img src={vite} alt="vite" className="border-2 rounded-[100%]" />

                            <div className="flex flex-col items-start">
                                <h1 className="font-bold">{localStorage.getItem('username')}</h1>
                                <p className="text-[13px]">Last seen 1 minute ago</p>
                            </div>

                        </div>

                        {/* Top right icons */}
                        <div className="flex items-center gap-5">
                            <FaPhoneAlt className="cursor-pointer hover:text-[#2279b7]" />
                            <FaVideo className="cursor-pointer hover:text-[#2279b7]" />
                            <IoSearch className="cursor-pointer hover:text-[#2279b7]" />
                        </div>

                    </div>




                    {/* Messages */}
                    <div className="flex flex-col p-4 h-[500px] overflow-y-auto">
                        {messages.map((msg, index) => (
                            <Message
                                key={index}
                                message={msg}
                                currentUser={currentUser}
                            />
                        ))}
                    </div>

                </div>


                {/* Bottom bar */}
                <form onSubmit={sendMessage} className="px-3 py-2">
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

                </form>



            </div>
    )
}

export default Conversations