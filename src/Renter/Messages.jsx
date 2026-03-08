import { useRef, useEffect } from "react";

function Message({ message, currentUser }) {
  const isMine = message.sender === currentUser;
  const messagesEndRef = useRef(null);

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [message]);

  return (
    <div ref={messagesEndRef} className={`flex ${isMine ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`
          max-w-xs px-4 py-2 rounded-2xl
          ${isMine 
            ? "bg-blue-500 text-white rounded-br-none" 
            : "bg-gray-300 text-black rounded-bl-none"}
        `}
      >
        <p className="text-sm">{message.body}</p>
        {/* <p className="text-[10px] opacity-70 mt-1 text-right">
            28
        </p> */}
      </div>
    </div>
  );
}

export default Message