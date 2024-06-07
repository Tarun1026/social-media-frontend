import React from "react";

const PostView = ({ post, onClose,username,avatar }) => {
  const { caption, imgUrl, likes, comments, user } = post;
 

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-0">
      <div className="w-3/5 h-4/5 bg-white rounded-lg overflow-hidden flex">
       
        <div className="w-2/3 h-full relative flex flex-col">
          <div>
          <img src={imgUrl} alt="Post" className="object-contain w-full h-full " />
          </div>
          <div>
          <p className="absolute bottom-0 left-0 right-0 text-md font-bold  p-4 bg-white">{caption}</p>
         
          <button className="absolute bottom-0 right-0 m-4 bg-blue-500 text-white px-4 py-2 my-2  rounded-lg">{likes} Likes</button>
          </div>
        </div>

        <div className="w-1/3 h-full p-4 flex flex-col justify-between relative">
          <div>
          <div className="flex items-center mb-2">
              <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
              <h3 className="text-lg font-bold">{username}</h3>
            </div>
      
            <div className="mt-4">
              <h4 className="font-bold">Comments</h4>
              {/* <ul>
                {comments.map((comment, index) => (
                  <li key={index} className="mt-2">{comment}</li>
                ))}
              </ul> */}
            </div>
          </div>
         
          <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostView;
