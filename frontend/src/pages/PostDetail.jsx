// src/components/PostDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10 text-lg text-gray-600 animate-pulse">Loading...</p>;

  if (!post)
    return <p className="text-center mt-10 text-red-500 text-lg">Post not found.</p>;

  return (
    <div className="min-h-screen bg-[#f9f5ff] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-blue-500 mb-4">{post.title}</h1>
        <p className="text-black text-lg leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block text-sm text-blue-500 hover:underline"
          >
            ← Back to posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
