import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <div className="bg-slate-700 h-screen flex justify-center item-center ">
        <div className="bg-white flex flex-col py-5 px-24 rounded-lg my-20">
          <div className="text-center font-bold px-20 py-3">Signup</div>
          <div className="mb-4 ">
            <label
              htmlFor="Firstname"
              className="text-sm block font-medium text-grey-700"
            >
              Username
            </label>
            <input
              type="text"
              id="Username"
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your Username"
              required
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="Email"
              className="text-sm block font-medium text-grey-700"
            >
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your Email-id"
              required
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="Password"
              className="text-sm block font-medium text-grey-700"
            >
              Create a Password
            </label>
            <input
              type="password"
              id="Password"
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your Password"
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="Password"
              className="text-sm block font-medium text-grey-700"
            >
              Confirm a Password
            </label>
            <input
              type="password"
              id="Password"
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your Password"
            />
          </div>
          
            <div className="font-medium mb-3 block text-sm text-indigo-500">
              Already have an account?
              <Link to="/Login" className="text-red-500 font-bold">  Login</Link>
            </div>
            <div>
            <button
            type="Submit"
            // onClick={onLogin}
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

export default Signup;
