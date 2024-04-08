import axios from "../../axios";
import React, { useState, useEffect } from "react";
const defaultpicture =
  "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png";

export default function Detail() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          console.log("Access token not found");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await axios.post("/users/profile/trilok", config);
        setUserProfile(response.data.data);
        console.log(response.data);
        console.log(userProfile);
      } catch (error) {
        console.log("Error fetching user profile", error.message);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <>
      {userProfile && (
        <div className="ml-20 mt-20">
          <div className="flex flex-row items-center">
            <img
              src={userProfile.avatar || defaultpicture}
              alt="profile"
              className="w-24 h-24 rounded-full"
            />
            <div className="flex flex-col ml-4">
              <div className="font-bold text-white">{userProfile.username}</div>
              <div className="flex flex-row mt-2">
                <div className="text-white bg-black p-7 rounded-md">Ed Profile</div>
                <div className="text-white bg-black p-2 rounded-md ml-4">E Profile</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3>Bio</h3>
            <p>{userProfile.bio}</p>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col">
              <div className="font-bold pl-9 pr-4">0</div>
              <div className="font-bold pl-9 pr-4">Posts</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold pl-9 pr-4">0</div>
              <div className="font-bold pl-9 pr-4">Folljj</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold pl-9 pr-4">0</div>
              <div className="font-bold pl-9 pr-4">Following</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
