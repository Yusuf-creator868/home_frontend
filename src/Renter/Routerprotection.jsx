import { Navigate, Outlet,} from "react-router-dom";
import { useAuth } from "../Contexts/useAuth";


export default function ProtectedRoute() {

  const { Auth } = useAuth();

  // If not logged in, redirect to login page
  if (!Auth) {
    return <Navigate to="/login" />;
  }

  // If logged in, show the requested route
  return <Outlet />;
}