import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const PostItem = ({ post }) => {
  const { deletePost, updatePost } = useContext(PostContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);

  const handleUpdate = () => {
    updatePost(post._id, { title: editTitle, content: editContent });
    setIsEditing(false);
  };

  const shortContent =
    post.content.length > 150
      ? post.content.substring(0, 150) + "..."
      : post.content;

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            rows={5}
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-3 py-1 mr-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">
            {shortContent}
            {post.content.length > 150 && (
              <Link
                to={`/post/${post._id}`}
                className="text-blue-600 underline ml-1 hover:text-blue-800"
              >
                Read more →
              </Link>
            )}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => deletePost(post._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default PostItem;
