import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3000/allUser")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4 bg-zinc-800 text-white h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">User List</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.username}
            className="bg-zinc-700 shadow-md rounded-lg p-4 hover:bg-zinc-600 transition duration-300"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{user.name}</h2>
              <p className="text-gray-400">@{user.username}</p>
              <p className="mt-2 text-gray-300">{user.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
