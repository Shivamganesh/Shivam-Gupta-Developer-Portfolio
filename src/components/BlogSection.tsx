import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data/blogPostsData";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";


export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 posts initially

  const [selectedPost, setSelectedPost] = useState(null);

  
useEffect(() => {
  const btn = document.getElementById("books");

  if (btn && 'ontouchstart' in window) {
    const addTouch = () => btn.classList.add("touched");
    const removeTouch = () =>
      setTimeout(() => btn.classList.remove("touched"), 300);

    btn.addEventListener("touchstart", addTouch);
    btn.addEventListener("touchend", removeTouch);

    return () => {
      btn.removeEventListener("touchstart", addTouch);
      btn.removeEventListener("touchend", removeTouch);
    };
  }
}, []);

  return (
    <section id="blog" className="relative bg-[#ffffff] py-24 px-6 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-cyan-900/10 via-indigo-900/10 to-purple-900/10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
      <motion.h2 
        className="text-4xl md:text-4xl text-center font-bold mb-4 text-white font-serif"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 bg-clip-text text-transparent">
         Latest Blog
        </span>
      </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-16"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.slice(0, visibleCount).map((post, index) => (

            <Link to={`/blog/${post.id}`}>

            <motion.div
              key={post.id}
              // onClick={() => setSelectedPost(post)}
              className="group relative rounded-3xl bg-zinc-900 border cursor-pointer shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-purple-500/20 transform-gpu transition-all duration-500 hover:scale-[1.04] hover:rotate-[0.5deg]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-t-3xl relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold rounded-full mb-3 shadow-md">
                  {post.tag}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Glow hover layer */}
              <div className="absolute inset-0 rounded-3xl z-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />
            </motion.div>
            </Link>
          ))}
        </div>
     {visibleCount < blogPosts.length && (
  <div className="flex justify-center mt-10">
    <button id="books" onClick={() => setVisibleCount((prev) => prev + 3)}>
      <div id="demo1">
        <h3>View More</h3>
        <h4>View More</h4>
      </div>
      <div id="book2"></div>
    </button>
  </div>
)}


      </div>

      {/* Modal for Full Post */}
      {/* <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
  className="bg-white text-black max-w-2xl w-full rounded-2xl p-6 shadow-xl relative overflow-y-auto max-h-[80vh]"
  initial={{ scale: 0.9, y: 50 }}
  animate={{ scale: 1, y: 0 }}
  exit={{ scale: 0.9, y: 50 }}
  transition={{ duration: 0.3 }}
>

              <button
                className="absolute top-3 right-4 text-xl text-gray-700 hover:text-red-500"
                onClick={() => setSelectedPost(null)}
              >
                &times;
              </button>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-gradient">
                {selectedPost.title}
              </h3>
              <p className="text-sm text-gray-500 italic mb-4">
                Category: {selectedPost.tag}
              </p>
             <p className="text-base leading-relaxed whitespace-pre-line">
  {selectedPost.content}
</p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
}
