// src/components/PostDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!post) return <p className="text-center mt-10 text-red-500">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default PostDetail;
