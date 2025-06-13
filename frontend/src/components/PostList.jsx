import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts, loading } = useContext(PostContext);

  if (loading)
    return <p className="text-center text-gray-600 text-lg animate-pulse">Loading posts...</p>;

  if (!posts.length)
    return <p className="text-center text-gray-500 text-lg">No posts available. Create one!</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
