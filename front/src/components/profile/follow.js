import axios from "../../axios";

const followUser = async (senderUsername, receiverUsername) => {
    try {
        const accessToken = document.cookie.split("; ").find(row => row.startsWith("accessToken=")).split("=")[1];


        const response = await axios.post("/users/follow-request", { senderId: senderUsername,receiverId:receiverUsername }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        console.log(response.data.data);
        return response.data; 
    } catch (error) {
        console.error("Error following user:", error);
        throw error; 
    }
};

export default followUser;

