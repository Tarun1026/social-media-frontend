import { useState, useEffect } from 'react';
import axios from '../../axios';

const useFollowRequests = () => {
  const [followRequests, setFollowRequests] = useState([]);
  const [showFollowRequests, setShowFollowRequests] = useState(true);
  const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];

  useEffect(() => {
    const fetchFollowRequests = async () => {
      try {
        const response = await axios.get('/users/get-follow-request', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
        setFollowRequests(response.data.data);
      } catch (error) {
        console.error('Error fetching follow requests:', error);
      }
    };

    fetchFollowRequests();
  }, [accessToken]);

  return { followRequests, showFollowRequests };
};

export default useFollowRequests;