// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-6 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="block p-3 hover:bg-gray-700 rounded">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/form" className="block p-3 hover:bg-gray-700 rounded">
            Form
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/data" className="block p-3 hover:bg-gray-700 rounded">
            Data
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
