import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import Cookies from "js-cookie";
const accessToken = Cookies.get("accessToken");

const Post = ({ profileUsername }) => {
  const [posts, setPosts] = useState([]);

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
            config)
        setPosts(response.data.data.post);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [profileUsername]);

  return (
    <div>
      <h2>Posts</h2>
      <div className="flex flex-wrap">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post._id} className="w-1/4 p-4">
              <img src={post.imgUrl} alt="post" className="w-full h-auto" />
              {/* <p>{post.caption}</p> */}
            </div>
          ))
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
}

export default Post;
