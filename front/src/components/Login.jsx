import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });
  const onLogin = async () => {
    try {
      const response=await axios.post("/Backend",user)
      console.log("Login Successful",response.data)
      alert("Login Successful")

    }
     catch (error) {
      console.log("LoginFailed",error.message);
     }
  };
  return (
    <>
      <div className="bg-slate-700 h-screen flex justify-center item-center ">
        <div className="bg-yellow-700 flex flex-col py-5 px-24 rounded-lg my-20">
          <div className="text-center font-bold px-20 py-3">Login</div>
          <div className="mb-4 ">
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
              onChange={(e)=>setUser({...user,Username:e.target.value})}
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4 ">
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
              onChange={(e)=>setUser({...user,Password:e.target.value})}
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your Password"
              required
            />
          </div>
          <Link to="/Signup">
            <div className="font-medium ml-2 mb-3 block text-sm text-indigo-300">
              Create an Account
            </div>
          </Link>
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
    </>
  );
}
