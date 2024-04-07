import axios from "../../axios";

const getFollowRequests = async () => {
    try {

        const accessToken = document.cookie.split("; ").find(row => row.startsWith("accessToken=")).split("=")[1];


        const response = await axios.get("/users/get-follow-request", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching follow requests:", error);
        throw error; 
    }
};

export default getFollowRequests;
