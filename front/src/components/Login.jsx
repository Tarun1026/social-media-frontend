import React,{useState} from "react";
import { Link } from "react-router-dom";

import axios from "../axios";
export default function Login() {
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });
  const onLogin = async () => {
    try {
      const response=await axios.post("/users/login",{username:user.Username,password:user.Password})
      console.log("Login Successful",response.data)
      alert("Login Successful")

    }
     catch (error) {
      console.log("LoginFailed",error.message);
     }
  };
  return (
    <>
    <div className="bg-slate-600  flex justify-end tex-center  ">
      <div className="bg-green-100 flex flex-col py-10 mb-60 mt-30 px-24 rounded-lg my-20 mr-20">
        <div className="text-center font-bold px-20 py-4">Login</div>
        <div className="mb-4">
          <label
            htmlFor="Username"
            className="text-sm block font-medium text-grey-700"
          >
            Username
          </label>
          <input
            type="text"
            id="Username"
            value={user.Username}
            onChange={(e) => setUser({ ...user, Username: e.target.value })}
            className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Password"
            className="text-sm block font-medium text-grey-700"
          >
            Password
          </label>
          <input
            type="password"
            id="Password"
            value={user.Password}
            onChange={(e) => setUser({ ...user, Password: e.target.value })}
            className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500"
            placeholder="Enter your Password"
            required
          />
        </div>
  
        <div className="font-bold mb-3 block text-sm text-indigo-500">
          Don't have an account?
          <Link to="/Signup" className="text-red-500 font-bold"> Signup</Link>
        </div>
        <div>
          <button
            type="Submit"
            onClick={onLogin}
            className="bg-green-500 w-full justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
            text-white hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  );
  }  