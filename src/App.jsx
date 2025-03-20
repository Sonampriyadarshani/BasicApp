import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Page/Home";
import FormPage from "./Page/FormPage";
import Data from "./Page/DataPage";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Contact from "./Page/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-64 mt-16 p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/data" element={<Data />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
