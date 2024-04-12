import React, { useState } from 'react';
import axios from '../../axios';
import Cookies from 'js-cookie';

const UserProfileSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const accessToken = Cookies.get('accessToken');

  const handleChange = async (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(`/users/search/${value}`, config);
      console.log(response.data);

        setSearchResults(response.data.users);

      }
    catch (error) {
      console.error('Error searching user profiles:', error);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search user profiles..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className='text-white'>
        {searchResults.map((profile, index) => (
          <li key={profile.username}>
            <img src={profile.avatar} alt={profile.username} />
            <div className='bg-white'>
              <p className='text-black'>Username: {profile.username}</p>
              <p>Full Name: {profile.fullname}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfileSearch;
