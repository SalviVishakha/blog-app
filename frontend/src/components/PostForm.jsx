import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      await addPost({ title, content });
      setTitle("");
      setContent("");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Create a New Post</h2>

        <input
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={6}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
