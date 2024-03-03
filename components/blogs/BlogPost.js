"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../app/lib/sanity";

const BlogPost = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    if (id) {
      client
        .fetch(
          `*[_id == "${id}"]{
          title,
          "imageUrl": image.asset->url,
          description,
          author,
          publishedAt,
        }[0]`, // [0] to get the first item from the result array
          { id }
        )
        .then((data) => setPost(data))
        .catch(console.error);
    }
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto mt-10 pb-16">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <img
          src={post.imageUrl}
          alt="Blog Post"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-6">{post.title}</h1>
        <p className="mt-4 text-gray-600">{post.description}</p>
        <div className="mt-4">
          <span className="text-sm font-semibold">
            Written by{" "}
            <a href="#" className="text-indigo-600">
              {post.author}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
