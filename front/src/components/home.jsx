import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { MdHome, MdSearch, MdPerson, MdCreate,MdNotificationsNone,MdOutlineMessage,MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
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
    <div className="flex flex-row">
      <div className="flex flex-col bg-black h-screen">

        <div className="font-bold text-4xl text-indigo-600 px-4 hidden sm:block">Snap Sphere</div>

        <div className="text-white px-4">
          <ul className="py-12">
            <li className="py-3 font-bold  text-2xl" onClick={gotohome}
              ><div className="flex flex-row"><MdHome className="md:hidden"/>
              <div className="hidden md:flex">Home</div></div></li>
            <li className="py-3 font-bold text-2xl" onClick={gotosearch
            }
            ><div className="flex flex-row"><MdSearch className="md:hidden"/>
            <div className="hidden md:flex">Serach</div></div></li>
            <li className="py-3 font-bold text-2xl"><div className="flex flex-row"><BsCameraReels className="md:hidden"/>
              <div className="hidden md:flex">Reels</div></div></li>
            <li className="py-3 font-bold text-2xl"><div className="flex flex-row"><MdNotificationsNone className="md:hidden"/>
              <div className="hidden md:flex">Notification</div></div></li>
            <li className="py-3 font-bold text-2xl"><div className="flex flex-row"><MdOutlineMessage className="md:hidden"/>
              <div className="hidden md:flex">Messages</div></div></li>
            <li className="py-3 font-bold text-2xl" onClick={gotoprofile}><div className="flex flex-row"><MdPerson className="md:hidden"/>
              <div className="hidden md:flex">Profile</div></div></li>
            <li className="py-3 font-bold text-2xl"><div className="flex flex-row"><MdOutlineExplore className="md:hidden"/>
              <div className="hidden md:flex">Explore</div></div></li>
            <li className="py-3 font-bold text-2xl" onClick={gotopost}><div className="flex flex-row"><MdCreate className="md:hidden"/>
              <div className="hidden md:flex">Create</div></div></li>
            {/* <li className="py-10 font-bold text-2xl">Settings</li> */}
            {/* <li className="bottom-0  font-bold text-2xl">More</li> */}
          </ul>
        </div>
        <div className="text-white   p-4 font-bold  text-2xl hidden sm:block ">More</div>
        <div className="text-white   ml-4 font-bold  text-2xl hidden sm:block">Threads</div>
        {/* <div className="text-red-400 bottom-0 p-4 font-bold  text-2xl">More</div> */}
      </div>
      <div className="bg-white pl-0.5 h-screen ">

      </div>
      </div>
    </>
  );
}
