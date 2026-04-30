import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Contexts/useAuth";
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

function Login() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const { login_auth } = useAuth()
  const nav = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();
    login_auth(username, password)
  }

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/auth/google/",
        { token: credentialResponse.credential },
        { withCredentials: true }
      );
      console.log("Backend response:", res.data);
      nav('/')
      // save token, redirect user etc
    } catch (err) {
      console.error(err.response?.data);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handlesubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={(e) => setusername(e.target.value)}
          value={username}
          className="border p-2 mb-3 w-full rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          className="border p-2 mb-3 w-full rounded"
        />

        <button type="submit" className="bg-blue-950 text-white px-4 py-2 rounded w-full cursor-pointer">
          Login
        </button>

        <h2>Don't have an account? <a href="/register" className="text-indigo-600 font-semibold">Register</a></h2>

        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log('Login Failed')}
        />
      </form>
    </div>
  );
}

export default Login;