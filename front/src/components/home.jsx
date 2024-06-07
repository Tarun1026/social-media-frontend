import React from "react";

export default function Home() {
  return (
    <>
    <div className="flex flex-row">
      <div className="flex flex-col bg-black h-screen">
      
        <div className="font-bold text-4xl text-indigo-600 px-4">Snap Sphere</div>
        <div className="text-white px-4">
          <ul className="py-12">
            <li className="py-3 font-bold  text-2xl">Home</li>
            <li className="py-3 font-bold text-2xl">Search</li>
            <li className="py-3 font-bold text-2xl">Reels</li>
            <li className="py-3 font-bold text-2xl">Notifications</li>
            <li className="py-3 font-bold text-2xl">Messages</li>
            <li className="py-3 font-bold text-2xl">Profile</li>
            <li className="py-3 font-bold text-2xl">Explore</li>
            <li className="py-3 font-bold text-2xl">Create</li>
            {/* <li className="py-10 font-bold text-2xl">Settings</li> */}
            {/* <li className="bottom-0  font-bold text-2xl">More</li> */}
          </ul>
        </div>
        <div className="text-white   p-4 font-bold  text-2xl ">More</div>
        <div className="text-white   ml-4 font-bold  text-2xl">Threads</div>
        {/* <div className="text-red-400 bottom-0 p-4 font-bold  text-2xl">More</div> */}
      </div>
      <div className="bg-white pl-0.5 h-screen ">

      </div>
      </div>
    </>
  );
}
