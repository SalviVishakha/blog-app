import React from "react";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">📝 Mini Blog</h1>

        <div className="flex justify-end mb-6">
          <Link
            to="/create"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            + New Post
          </Link>
        </div>

        <PostList />
      </div>
    </div>
  );
};

export default Home;