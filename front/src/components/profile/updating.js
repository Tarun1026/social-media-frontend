import React, { useState } from "react";
import Profile from "./profile";
import UpdateProfile from "./update";


const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <UpdateProfile />
      ) : (
        <Profile onEditProfile={handleEditProfile} />
      )}
    </div>
  );
};

export default ProfilePage;
