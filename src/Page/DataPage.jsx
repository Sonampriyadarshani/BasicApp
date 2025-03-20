import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Data = () => {
  const [users, setUsers] = useState([]);
  const formData = useSelector((state) => state.form.formData); // Get form data from Redux

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6 ml-64 min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Data</h1>

      {/* Form Data Submitted by Users */}
      <div>
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="w-full border border-gray-300 bg-white shadow-md rounded-lg">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="p-3 border text-left">Name</th>
                <th className="p-3 border text-left">Email</th>
                <th className="p-3 border text-left">City</th>
              </tr>
            </thead>
            <tbody>
              {formData.length > 0 ? (
                formData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-3 border">{data.name}</td>
                    <td className="p-3 border">{data.email}</td>
                    <td className="p-3 border">{data.city}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 border text-center" colSpan="3">
                    No form data submitted yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Data;
