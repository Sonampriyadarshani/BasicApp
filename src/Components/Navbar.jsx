import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth?.loggedInUser); 

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md ml-64">
      <h1 className="text-xl font-bold">My App</h1>
      <div>
        <Link to="/" className="mx-3 hover:text-gray-300">
          Home
        </Link>
        <Link to="/form" className="mx-3 hover:text-gray-300">
          Form
        </Link>
        <Link to="/data" className="mx-3 hover:text-gray-300">
          Data
        </Link>
        <Link to="/contact" className="mx-3 hover:text-gray-300">
          Contact
        </Link>{" "}
        {/* ✅ Contact Page Added */}
        {loggedInUser ? (
          <button
            className="bg-red-500 px-4 py-2 rounded ml-3"
            onClick={() => dispatch(logoutUser())}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="mx-3 hover:text-gray-300">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
