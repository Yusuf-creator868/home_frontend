import React, { useEffect, useState } from "react";
import { logout } from "../api";
import {useNavigate} from "react-router-dom"

export const Menu = () => {
    const nav = useNavigate()

       const handleLogout = async () =>{
        const success = await logout();
        if (success){
            nav("/login")
        }
    }

 
    return(
        <div>
        <h1>Welcome Back</h1>
        
        
        <button onClick={handleLogout} className="p-3.5 bg-red-500 text-amber-50">Logout</button>
        </div>
    )
}