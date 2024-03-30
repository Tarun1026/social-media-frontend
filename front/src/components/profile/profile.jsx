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
      
        <div className="ml-20 mt-20">
          <div className="flex flex-row items-center">
            <img
              // src={userProfile.profilePicture || defaultpicture}
              src={defaultpicture}
              alt="profile"
              className="w-24 h-24 rounded-full"
            />
            <div className="flex flex-col ml-4">
              {/* <div className="font-bold text-white">{userProfile.username}</div> */}
              <div className="font-bold text-white">userName</div>
              <div className="flex flex-row mt-2">
                <div className="text-white bg-black p-2 rounded-md">Edit Profile</div>
                <div className="text-white bg-black p-2 rounded-md ml-4">Edit Profile</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            {/* <h2>{userProfile.profileName}</h2> */}
            <h2>ProfileName</h2>
            <h3>Bio</h3>
            {/* <p>{userProfile.bio}</p> */}
            <p>This is user bio <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, in?</p>
          </div>
          
          <div className="flex flex-row mt-4">
            <div className="flex flex-col"><div className="font-bold pl-9 pr-4">{/* {userProfile.postCount} {userProfile.postCount === 1 ? "Post" : "Posts"} */}
              0</div>
              <div className="font-bold pl-9 pr-4">Posts</div>
              </div>
              <div className="flex flex-col"><div className="font-bold pl-9 pr-4">{/* {userProfile.followerCount} {userProfile.followerCount === 1 ? "Follower" : "Followers"} */}
              0</div>
              <div className="font-bold pl-9 pr-4">Followers</div>
              </div>
              <div className="flex flex-col"><div className="font-bold pl-9 pr-4">{/* {userProfile.followingCount} */}
              0</div>
              <div className="font-bold pl-9 pr-4">Following</div>
              </div>
            
          
          
           </div> 
            
        </div>
      
    </>
  );
}
