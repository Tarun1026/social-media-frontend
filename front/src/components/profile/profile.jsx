import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import followUser from "./follow";
import getFollowRequests from "./getfollowrequest";
import FollowRequestComponent from "./followcomponent";
import uploadPost from "./uploadpost";

const defaultpicture =
  "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png";

const Profile = ({ onEditProfile }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [userProfile, setuserProfile] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);
  const [loggedInUserID, setLoggedInUserID] = useState(null);
  const { username: profileUsername } = useParams();
  const [profileUserID, setprofileUserID] = useState(null);
  const [showFollowRequests, setShowFollowRequests] = useState(false);
  const [followRequests, setFollowRequests] = useState([]);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const accessToken = Cookies.get("accessToken");
  useEffect(() => {
  
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    if (accessToken) {
  
      const decodedToken = jwtDecode(accessToken);
      const loggedInUserID = decodedToken._id;
      setLoggedInUserID(loggedInUserID);
      const loggedInUsername = decodedToken.username;
      setLoggedInUsername(loggedInUsername);
    }


    const fetchuserProfile = async () => {
      try {
        const response = await axios.post(
          `/users/profile/${profileUsername}`,
          null,
          config 
        );
        setprofileUserID(response.data.data._id);
        setuserProfile(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchuserProfile();
  }, [profileUsername]);

  useEffect(() => {

    const fetchFollowRequests = async () => {
      try {
        // Fetch follow requests
        const data = await getFollowRequests();
        setFollowRequests(data); // Set the follow requests in state
      } catch (error) {
        console.error("Error fetching follow requests:", error);
      }
    };

    fetchFollowRequests();
  }, []); 

  // Function to handle displaying follow requests
  const handleShowFollowRequests = () => {
    // Logic to display follow requests, e.g., in a modal or dropdown
    console.log(followRequests); // Just an example, you can customize this according to your UI requirements
  };
   

  const isOwnProfile = loggedInUsername === profileUsername;

  const handleFollow = async () => {
    try {
      await followUser(loggedInUserID, profileUserID);
      // Handle follow success
    } catch (error) {
      // Handle follow error
    }
  };
  const handleToggleFollowRequests = () => {
    setShowFollowRequests(!showFollowRequests);
  };
 const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleUploadPost = async () => {
    try {
      const data = await uploadPost(caption, image, accessToken);
      console.log(data.data); 
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };
  return (
    <div>
      {userProfile ? (
        <>
          <div className="ml-20 mt-20">
            <div className="flex flex-row items-center">
              <img
                src={userProfile.avatar || defaultpicture}
                alt="profile"
                className="w-24 h-24 rounded-full"
              />
              <div className="flex flex-col ml-4">
                <div className="font-bold text-white">{profileUsername}</div>
                {isOwnProfile ? (
                  <div className="flex flex-row mt-2">
                    <div
                      className="text-white bg-black p-2 rounded-md"
                      onClick={onEditProfile}
                    >
                      Edit Profile
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row mt-2">
                    <div
                      className="text-white bg-blue-400 p-2 rounded-md"
                      onClick={handleFollow}
                    >
                      Follow
                    </div>
                  </div>
                )}
              </div>
              {isOwnProfile ? (
                <div className="flex flex-row mt-2">
                  <div
                    className="text-white bg-black p-2 rounded-md"
                    onClick={handleToggleFollowRequests}
                  >
                    followrequest
                  </div>
                  {showFollowRequests && <FollowRequestComponent followRequests={followRequests.data} />}
                </div>
                
              ) : (
                <div></div>
              )}
            </div>

            <div>
              <div className="flex flex-col mt-4 ">
                <h3>Bio</h3>
                <p>{userProfile.bio}</p>
              </div>
              <div className="flex flex-row mt-4">
                <div className="flex flex-col">
                  <div className="font-bold pl-9 pr-4">
                    {userProfile.followersCount}
                  </div>
                  <div className="font-bold pl-9 pr-4">Followers</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold pl-9 pr-4">
                    {userProfile.followingCount}
                  </div>
                  <div className="font-bold pl-9 pr-4">Following</div>
                </div>
              </div>
            </div>
            <div className="h-20 w-20">
              <img src={userProfile.post[0].imgUrl} alt="post" />
            </div>
            <div className="h-20 w-20">
              <img src={userProfile.post[1].imgUrl} alt="post" />
            </div>
            <div className="h-20 w-20">
              <img src={userProfile.post[2].imgUrl} alt="post" />
            </div>
      <div className="mt-4 ml-20">
        
          <div className="mb-4">
            <label htmlFor="caption" className="block text-white">
              Caption:
            </label>
            <input
              type="text"
              id="caption"
              value={caption}
              onChange={handleCaptionChange}
              className="w-full bg-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-white">
              Image:
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleUploadPost}
          >
            Upload Post
          </button>

      </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Profile;