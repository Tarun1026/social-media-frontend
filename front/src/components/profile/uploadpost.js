// uploadPost.js
import axios from "../../axios";

const uploadPost = async (caption, post,accessToken) => {
  try {
    console.log(caption)
    console.log(post)
    const response = await axios.post("/users/upload-post", {caption, post}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error uploading post:", error);
  }
};

export default uploadPost;
