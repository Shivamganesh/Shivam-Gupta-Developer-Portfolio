// src/pages/ai-tools.jsx

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, UploadCloud, SearchCode } from "lucide-react";

const AiToolsPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-900 text-white font-sans overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        Welcome to Shivam’s AI Toolbox
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-center text-blue-200 mt-4 max-w-2xl"
      >
        Supercharge your hiring or career journey with intelligent tools that match your goals.
      </motion.p>

      {/* AI Tools Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 w-full max-w-5xl">
        {/* AI Job Match Analyzer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <SearchCode size={28} className="text-cyan-400" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              AI Job Match Analyzer
            </h2>
          </div>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Paste a job description and let the AI compare it with Shivam's skills, projects, and resume. Get a matching percentage, skill gaps, and suggestions to improve fit for the job.
          </p>
          <a
            href="/ai-job-analyzer"
            target="_blank"
            className="inline-block w-full text-center py-3 px-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Try Job Match AI
          </a>
        </motion.div>

        {/* AI Resume Reviewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <UploadCloud size={28} className="text-purple-400" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              AI Resume Reviewer
            </h2>
          </div>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Upload your resume PDF and let AI analyze it. You'll get a resume score, keyword matches, formatting tips, and actionable feedback to boost your chances.
          </p>
          <a
            href="/ai-resume-analyzer"
            target="_blank"
            className="inline-block w-full text-center py-3 px-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-md hover:shadow-pink-400/30 transition-all duration-300"
          >
            Try Resume AI
          </a>
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 text-blue-300 text-sm tracking-wide animate-pulse"
      >
        ✨ Built with AI to make hiring and job applications smarter ✨
      </motion.p>
    </section>
  );
};

export default AiToolsPage;
