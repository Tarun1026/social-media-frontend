import React, { useState, useEffect } from 'react';
import axios from 'axios';
import acceptRequest from './acceptrequest';
import useFollowRequests from './getfollowrequest';

const FollowRequestsComponent = () => {
  const { followRequests, showFollowRequests } = useFollowRequests();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [senderDetails, setSenderDetails] = useState({});

  const handleAcceptRequest = async (requestId) => {
    try {
      const data = await acceptRequest(requestId, 'accepted');
      console.log(data);
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const data = await acceptRequest(requestId, 'rejected');
      console.log(data);
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  const toggleFollowRequests = () => {
    setButtonClicked(!buttonClicked);
  };

  useEffect(() => {
    const fetchSenderDetails = async (senderId) => {
      try {
        const response = await axios.get(`/users/profile/${followRequests.username}`);
        setSenderDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching sender details:', error);
      }
    };

    if (showFollowRequests) {
      followRequests.forEach(request => {
        fetchSenderDetails(request.sender).then();
      });
    }
  }, [followRequests, showFollowRequests]);

  if (!showFollowRequests) {
    return (
      <div className="text-white">
        <button onClick={toggleFollowRequests} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 mt-4">
          Requests
        </button>
      </div>
    );
  }

  return (
    <div className="text-white">
      <button onClick={toggleFollowRequests} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 mt-4">
        Requests
      </button>
      {buttonClicked && (
        <div className="h-full bg-white p-4 ml-10 mt-4">
          <h2 className="text-lg font-bold mb-4">Follow Requests</h2>
          {followRequests.map((request) => (
            <div key={request._id} className="mb-4">
              <div className="flex items-center mb-2">
                <img src={senderDetails[request.sender]?.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                <p className="font-semibold text-black">{senderDetails[request.sender]?.username}</p>
                <p className="font-semibold text-black">{request._id}</p>
              </div>
              <p><span className="font-semibold">Status:</span> {request.status}</p>
              <button onClick={() => handleAcceptRequest(request._id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                Accept
              </button>
              <button onClick={() => handleRejectRequest(request._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Reject
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FollowRequestsComponent;
