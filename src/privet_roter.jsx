import { useEffect } from "react";
import { useAuth } from "./Contexts/useAuth"
import { Navigate } from "react-router-dom";


const Privetrouter = ({ children }) => {

    const { Auth, loading } = useAuth();
    
    if (loading) return <p>Loading....</p>


        if (!Auth) {
            return <Navigate to="/login" replace/>
        } else { 
            return children
        }
}
export default Privetrouter