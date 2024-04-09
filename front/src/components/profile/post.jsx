import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import Cookies from "js-cookie";
import PostView from "./postview";

const accessToken = Cookies.get("accessToken");

const Post = ({ profileUsername,avatar}) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [length, setLength] = useState(0); 

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const fetchPosts = async () => {
      try {
        const response = await axios.post(
          `/users/profile/${profileUsername}`,
          null,
          config
        );
        console.log(response.data);
        setPosts(response.data.data.post);
        setLength(response.data.data.post.length);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [profileUsername]);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowPostDetail(true);
  };
  const handleClosePost = (post) => {
    setShowPostDetail(false);
  }
  return (
    <div>

      

      <div>
        <h2 className="text-lg font-bold mb-4">Posts</h2>
        {posts && length > 0 ? (
          <div className="grid grid-cols-3 gap-0">
            {posts.map(post => (
              <div key={post._id} className="p-1 border border-gray-300">
                <img
                  src={post.imgUrl}
                  alt="post"
                  className="w-full h-40 object-cover"
                  onClick={() => handlePostClick(post)}
                />
                
              </div>
            ))}
          </div>
        ) : (
          <p>No posts available</p>

        )}
      </div>
      {showPostDetail && <PostView post={selectedPost} username={profileUsername} avatar={avatar} onClose={handleClosePost}/>} 
    </div>
  );
}

export default Post;
