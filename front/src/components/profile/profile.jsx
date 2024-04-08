import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import followUser from "./follow";
import FollowRequestComponent from "./followcomponent";
import uploadPost from "./uploadpost";
import { useNavigate } from "react-router-dom";
import getFollowRequests from "./getfollowrequest";
import Post from "./post";


const defaultpicture =
  "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png";

const Profile = ({ onEditProfile,posts }) => {
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
  const navigate = useNavigate();

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

    const fetchUserProfile = async () => {
      try {
        const response = await axios.post(
          `/users/profile/${profileUsername}`,
          null,
          config
        );
        setprofileUserID(response.data.data._id);
        setuserProfile(response.data.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchUserProfile();
  }, [profileUsername, accessToken]);

  useEffect(() => {
    const fetchFollowRequests = async () => {
      try {
        const data = await getFollowRequests();
        console.log(data);
        setFollowRequests(data.data);
        setShowFollowRequests(data.data.some((request) => request.status === "pending")); 
      } catch (error) {
        console.error("Error fetching follow requests:", error);
      }
    };

    fetchFollowRequests();
  }, [accessToken]); 

  const isOwnProfile = loggedInUsername === profileUsername;

  const handleFollow = async () => {
    try {
      await followUser(loggedInUserID, profileUserID);
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const handleToggleFollowRequests = () => {
    setShowFollowRequests(!showFollowRequests);
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
              {isOwnProfile && showFollowRequests ? ( 
                <div className="flex flex-row mt-2">
                  <div
                    className="text-white bg-black p-2 rounded-md"
                    onClick={handleToggleFollowRequests}
                  >
                    Show Follow Requests
                  </div>
                  {showFollowRequests && (
                    <FollowRequestComponent
                      followRequests={followRequests.data}
                      // handleAcceptRequest={handleAcceptRequest}
                      // handleRejectRequest={handleRejectRequest}
                    />
                  )}
                </div>
              ) : null}
            </div>

            <div>
              <div className="flex flex-col mt-4">
                <h3>Bio</h3>
                <p>{userProfile.bio}</p>
              </div>
              <div className="flex flex-row mt-4">
                <div className="flex flex-col">
                  <div className="font-bold pl-9 pr-4">
                    {userProfile.postCount}
                  </div>
                  <div className="font-bold pl-9 pr-4">Post</div>
                </div>
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
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={() => {
                navigate("/profile/post");
              }}
            >
              Upload Post
            </button>
          </div>
          <Post profileUsername={profileUsername} />

        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Profile;
