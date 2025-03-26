import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let [profileData, setProfileData] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    axios
      .get("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-blue-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
            alt="Profile"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {profileData?.username}
          </h2>
          <p className="text-gray-600">{profileData?.email}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">About Me</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Details</h3>
          <ul className="mt-2 text-gray-600 text-sm">
            <li>
              <strong>Location:</strong> New York, USA
            </li>
            <li>
              <strong>Email:</strong> pranjal@gmail.com
            </li>
            <li>
              <strong>Member Since:</strong> January 2023
            </li>
          </ul>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
