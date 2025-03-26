import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-blue-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
            alt="Profile"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
