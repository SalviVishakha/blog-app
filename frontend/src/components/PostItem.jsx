import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
      <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{post.title}</h3>
      <p className="text-gray-700 line-clamp-3 mb-4">{post.content}</p>
      <Link
        to={`/post/${post._id}`}
        className="text-indigo-500 font-medium hover:underline transition"
      >
        Read More →
      </Link>
    </div>
  );
};

export default PostItem;
