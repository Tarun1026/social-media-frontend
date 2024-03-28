import React from "react";

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
              Firstname
            </label>
            <input
              type="text"
              id="Firstname"
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your First name"
            required
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="Lastname"
              className="text-sm block font-medium text-grey-700"
            >
              Lastname
            </label>
            <input
              type="text"
              id="Lastname"
              className="shadow-sm rounded-md px-3 py-2 w-full border border-grey-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo:500 "
              placeholder="Enter your Last name"
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
        </div>
      </div>
    </>
  );
}

export default Signup;
