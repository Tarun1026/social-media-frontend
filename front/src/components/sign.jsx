import React,{useState} from "react";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("/backend", user);
      console.log("Signup Successful", response.data);
    } catch (error) {
      console.log("Signup failed", error.message);
    }
  };

  return (
    <>
      <div className="bg-slate-700 h-screen flex justify-center item-center ">
        <div className="bg-white flex flex-col py-5 px-24 rounded-lg my-20">
          <div className="text-center font-bold px-20 py-3">Signup</div>
          <div className="mb-4 ">
            <label
              htmlFor="username"
              className="text-sm block font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              className="shadow-sm rounded-md px-3 py-2 w-full border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your Username"
              required
            />
          </div>

          <div className="mb-4 ">
            <label
              htmlFor="email"
              className="text-sm block font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="shadow-sm rounded-md px-3 py-2 w-full border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your Email-id"
              required
            />
          </div>

          <div className="mb-4 ">
            <label
              htmlFor="password"
              className="text-sm block font-medium text-gray-700"
            >
              Create a Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="shadow-sm rounded-md px-3 py-2 w-full border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your Password"
              required
            />
          </div>

          <div className="mb-4 ">
            <label
              htmlFor="confirmPassword"
              className="text-sm block font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow-sm rounded-md px-3 py-2 w-full border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Confirm your Password"
              // Add onChange handler here
              required
            />
          </div>

          <button
            onClick={onSignup}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
