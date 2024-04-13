import React, { useState } from 'react';
import axios from '../../axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
const defaultpicture =
  "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png";
const UserProfileSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const accessToken = Cookies.get('accessToken');
  const navigate = useNavigate();

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
  const clickedProfile=(username)=>{
    navigate(`/profile/${username}`);
  }

 

  return (
  <div className='flex w-full justify-center'>
    <div className="flex flex-col items-center mt-4">
    <input
      type="text"
      placeholder="Search user profiles..."
      value={searchTerm}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
    />
    <ul className="text-white -ml-2">
      {searchResults.map((profile) => (
        <li key={profile.username} className="flex items-center mb-4 " onClick={()=>clickedProfile(profile.username)} style={{ cursor: 'pointer' }}>

         <img
            src={profile.avatar}
            alt={profile.username}
            className="w-8 h-8 rounded-full mr-2 object-cover"
            style={{width:'4rem', height:'4rem'}}
            onError={(e) => { e.target.src = defaultpicture; }}
            
          />

          <div className="bg-white rounded-md p-2 ">
            <p className="text-black font-semibold">{profile.username}</p>
            <p className="text-gray-700"> {profile.fullname}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  </div>

  );
};

export default UserProfileSearch;
