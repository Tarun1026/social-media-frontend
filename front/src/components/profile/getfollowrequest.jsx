import { useState, useEffect } from 'react';
import axios from '../../axios';

const useFollowRequests = () => {
  const [followRequests, setFollowRequests] = useState([]);
  const [showFollowRequests, setShowFollowRequests] = useState(true); // Set initial state to true to show the button
  const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];

  useEffect(() => {
    const fetchFollowRequests = async () => {
      try {
        const response = await axios.get('/users/get-follow-request', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data.data;
        setFollowRequests(data);
      } catch (error) {
        console.error('Error fetching follow requests:', error);
      }
    };

    fetchFollowRequests();
  }, [accessToken]);

  return { followRequests, showFollowRequests };
};

export default useFollowRequests;
