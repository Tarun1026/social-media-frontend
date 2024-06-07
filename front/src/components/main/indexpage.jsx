import React, { useState, useEffect } from 'react';
import axios from "../../axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function Indexpage() {
    const [posts, setPosts] = useState([]);
    const [loggedInUsername, setLoggedInUsername] = useState(null);
    const accessToken = Cookies.get("accessToken");
    const [username, setUsername] = useState('');
    useEffect(() => {
        if (accessToken) {
            const decodedToken = jwtDecode(accessToken);
            const loggedInUsername = decodedToken.username;
            setLoggedInUsername(loggedInUsername);
        }
    }, []);

    useEffect(() => {
        if (loggedInUsername) {
            const fetchPosts = async () => {
                try {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    };
                    // console.log("hello");
                    // const followersrequest = await axios.get(`/users/get-followers/${loggedInUsername}`,  config);
                    // console.log(followersrequest.data);
                    // const followers = followersrequest.data.followers;
                    // console.log('followers', followers);
                    // // console.log(followers);
                    const followingrequest = await axios.get(`/users/get-followings/${loggedInUsername}`,  config);
                    console.log(followingrequest.data);
                    const following = followingrequest.data.following;
                    console.log('following',following);
                    const allUsers = [...following];
                    const postsPromises = allUsers.map(async (user) => {
                        const username =  user.following.username;
                        const profileRequest = await axios.post(`/users/profile/${username}`, null, config);
                        setUsername(profileRequest.data.data.username);
                        return profileRequest.data.data.post;
                    });
                    const postsData = await Promise.all(postsPromises);
                    const allPosts = postsData.reduce((acc, curr) => acc.concat(curr), []);
                    const sortedPosts = allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setPosts(sortedPosts);
                } catch (error) {
                    console.log("Error fetching posts: " + error.message);
                }
            }
            fetchPosts();
        }
    }, [loggedInUsername]);

    return (
        <>
 <div className="bg-black flex justify-center items-center flex-col ">
  <div className="max-h-screen overflow-y-auto"> 
    {posts.map((post) => (
      <div className="text-white font-bold flex justify-center items-center" key={post._id}>
        <div className="w-1/3 h-2/3 p-4 flex flex-col justify-between relative">
          <h2 className='text-white'>{username}</h2>
          <img src={post.imgUrl} alt="Post" className="object-fit-content " />
        </div>
      </div>
    ))}
  </div>
</div>


    </>
    
    )
}

export default Indexpage;
