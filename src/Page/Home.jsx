import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ml-64 p-8">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      {status === "loading" && (
        <p className="text-lg text-gray-700">Loading...</p>
      )}

      {status === "succeeded" && (
        <ul className="bg-white shadow-md p-6 rounded-lg w-full max-w-2xl">
          {items.map((item) => (
            <li
              key={item.id}
              className="p-2 border-b last:border-b-0 text-center"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}

      {status === "failed" && (
        <p className="text-lg text-red-700">Failed to load data.</p>
      )}
    </div>
  );
};

export default Home;
