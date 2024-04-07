
import axios from "../../axios";

const acceptRequest = async (requestId, action) => {
  try {
    const response = await axios.post("/users/handle-follow-request", { requestId: requestId, action: action });
    return response.data;
  } catch (error) {
    throw new Error("Error accepting request:", error);
  }
};

export default acceptRequest;
