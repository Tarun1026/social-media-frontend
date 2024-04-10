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

    <div className="">
      {userProfile ? (
        <>
          <div className="ml-60  mt-20  text-white">
            <div className="flex flex-row items-center mt-30 ">
              <img
                src={userProfile.avatar || defaultpicture}
                alt="profile"
                className="w-40 h-40 rounded-full"
              />
              <div className="flex flex-row ml-20 -mt-12 ">
                <div className="font-bold text-white text-2xl font-normal mb-20">{profileUsername}</div>
                {isOwnProfile ? (
                  <div className="flex flex-row mt-1">
                    <div
                      className="text-white  bg-blue-200 ml-4 text2xl text-green-800 font-bold mb-20 rounded-md"
                      onClick={onEditProfile}
                    >
                      Edit Profile
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row ">
                    <div
                      className="text-white  bg-blue-400 ml-7 font-bold text-1xl p-1 px-4 text-black mb-20 rounded-md"
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
       
              <div className="flex flex-row  ml-60 -mt-20 ">
                <div className="flex flex-row -mt-7">
                  <div className="font-bold  pr-2 ">
                    {userProfile.postCount}
                  </div>
                  <div className="font-bold ">Posts</div>
                </div>
                <div className="flex flex-row -mt-7">
                  <div className="font-bold pl-9 pr-2">
                    {userProfile.followersCount}
                  </div>
                  <div className="font-bold  pr-2">Followers</div>
                </div>
                <div className="flex flex-row -mt-7">
                  <div className="font-bold pl-9 pr-2">
                    {userProfile.followingCount}
                  </div>
                  <div className="font-bold  pr-2">Following</div>
                </div>
              </div>
              <div className="flex flex-col mt-2 ml-60">
                {/* <h3>Bio</h3> */}
                <p>{userProfile.bio}</p>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-20"
              onClick={() => {
                navigate("/profile/post");
              }}
            >
              Upload Post
            </button>
          </div>

          

          <div className="ml-60">
            if ({userProfile.post}==false) {
              <div></div>
              
            }
            else{
          <Post profileUsername={profileUsername} avatar={userProfile.avatar}/>
}
          </div>

        </>
        
      ) 
      : (
        <div>Loading...</div>
      )
      }
      
      </div>
   
  );
};

export default Profile;
