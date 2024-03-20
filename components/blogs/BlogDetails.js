"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../app/lib/sanity";
import Link from "next/link";

const BlogDetails = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"]{
            _id,
            title,
            "imageUrl": image.asset->url,
            description,
            author,
            publishedAt,
            slug
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full bg-[#f6f6f6]">
      <div className="px-4 pt-8 pb-16 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="mt-4 text-gray-600 line-clamp-4">
                  {post.description}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post._id}`}
                    className="text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #{post.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
