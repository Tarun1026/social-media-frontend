import axios from "../../axios";
import React, { useState } from "react";
import Cookies from "js-cookie";

export default function UpdateProfile() {
    const [profile, setProfile] = useState({
        username: "",
        bio: "",
        avatar: null, 
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accessToken = Cookies.get("accessToken");

            if (!accessToken) {
                console.log("Access token not found");
                return;
            }

            const formData = new FormData();
            formData.append("bio", profile.bio);
            formData.append("avatar", profile.avatar);

            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "multipart/form-data", 
                },
            };

            const response = await axios.post("users/updateprofile", formData, config);
            console.log("Profile updated successfully", response.data);
        } catch (error) {
            console.log("Error updating profile", error.message);
        }
    };

    const handleFileChange = (e) => {
        setProfile({ ...profile, avatar: e.target.files[0] });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={profile.username}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        rows="3"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                        Profile Picture
                    </label>
                    <input
                        type="file"
                        id="profilePicture"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 block w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
}
