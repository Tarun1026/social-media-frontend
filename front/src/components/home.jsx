import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
export default function Home() {
  let username;
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    const decodedToken = jwtDecode(accessToken);
    username = decodedToken.username;
  }
  const navigate = useNavigate();
  const gotohome = ()=>{
    navigate('/post');
  }
  const gotosearch = ()=>{
    navigate('/search');
  }
  const gotoprofile = ()=>{
    navigate(`/profile/${username}`);
  }
  const gotopost=()=>{
    navigate('/profile/post');
  };
  return (
    <>
      <div className="flex flex-col bg-black h-screen">
        <div className="font-bold text-4xl text-indigo-600 px-4">Snap Sphere</div>
        <div className="text-white px-4">
          <ul className="py-12">
            <li className="py-3 font-bold  text-2xl" onClick={gotohome}
              >Home</li>
            <li className="py-3 font-bold text-2xl" onClick={gotosearch
            }
            >Search</li>
            <li className="py-3 font-bold text-2xl">Reels</li>
            <li className="py-3 font-bold text-2xl">Notifications</li>
            <li className="py-3 font-bold text-2xl">Messages</li>
            <li className="py-3 font-bold text-2xl" onClick={gotoprofile}>Profile</li>
            <li className="py-3 font-bold text-2xl">Explore</li>
            <li className="py-3 font-bold text-2xl" onClick={gotopost}>Create</li>
            {/* <li className="py-10 font-bold text-2xl">Settings</li> */}
            {/* <li className="bottom-0  font-bold text-2xl">More</li> */}
          </ul>
        </div>
        <div className="text-white   p-4 font-bold  text-2xl ">More</div>
        <div className="text-white   ml-4 font-bold  text-2xl">Threads</div>
        {/* <div className="text-red-400 bottom-0 p-4 font-bold  text-2xl">More</div> */}
      </div>
    </>
  );
}
