// src/context/PostContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (newPost) => {
    try {
      const res = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      const data = await res.json();
      setPosts((prev) => [...prev, data]);
    } catch (error) {
      console.error("Failed to add post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
