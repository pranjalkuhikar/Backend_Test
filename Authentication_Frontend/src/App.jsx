import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

const App = () => {
  return (
    <>
      <nav className="bg-gray-600 text-white p-4 shadow-md font-[Arial]">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to={"/register"}
              className="hover:text-blue-300 transition-colors"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              className="hover:text-blue-300 transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"/profile"}
              className="hover:text-blue-300 transition-colors"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
