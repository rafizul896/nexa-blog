"use client";
import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { Blog } from "@/types";
import React from "react";

// export const metadata: Metadata = {
//   title: "NexaBlog | Blogs",
// };

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
