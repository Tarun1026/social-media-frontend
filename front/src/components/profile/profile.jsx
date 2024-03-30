import axios from "axios";
import React, { useState, useEffect } from "react";
const defaultpicture =
  "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png";

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/backend");
        setUserProfile(response.data);
      } catch (error) {
        console.log("Error fetching user profile", error.message);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md max-auto bg-white rounded-md p-4">
          <div className="text-center">
            <img
              src={defaultpicture}
              alt="profile"
              className="w-2 h-screen"
            />
            <h2 className="text-xl font-semibold">
Tarun
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
