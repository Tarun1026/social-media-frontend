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
      <div className="follow-request-container border border-gray-300 rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Follow Requests</h2>
      {followRequests.map((request) => (
        <div key={request._id} className="follow-request-item mb-4">
          <p className="mb-2">Sender: {request.sender}</p>
          <p className="mb-2">Status: {request.status}</p>
          <div className="button-container">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
              onClick={() => handleAcceptRequest(request._id)}
            >
              Accept
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => handleRejectRequest(request._id)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
    );
  };

  export default FollowRequestComponent;
