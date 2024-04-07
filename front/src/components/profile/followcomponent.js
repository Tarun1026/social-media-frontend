import React from "react";
import acceptRequest from "./acceptrequest";

const FollowRequestComponent = ({ followRequests }) => {

  const handleAcceptRequest = async (requestId) => {
    try {
      const data = await acceptRequest(requestId, "accepted");
      console.log(data); 
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const data = await acceptRequest(requestId, "rejected");
      console.log(data); 
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  return (
    <div className="follow-request-container">
      <h2>Follow Requests</h2>
      {followRequests.map((request) => (
        <div key={request._id} className="follow-request-item">
          <p>Sender: {request.sender}</p>
          <p>Status: {request.status}</p>
          <div>
            <button onClick={() => handleAcceptRequest(request._id)}>Accepted</button>
            <button onClick={() => handleRejectRequest(request._id)}>Rejected</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowRequestComponent;
