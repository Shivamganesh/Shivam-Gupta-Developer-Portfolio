// src/pages/ai-job-analyzer.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchCode, Loader2, AlertTriangle } from "lucide-react";

const JobAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/job-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription,
          resumeText: `Shivam Gupta is a full stack and mobile developer skilled in React.js, Node.js, MongoDB, Express.js, Tailwind CSS, React Native, and Java. He built multiple real-world projects like GrocyGo and ShareIt.`,
          skills: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "React Native",
            "Tailwind CSS",
            "Java",
          ],
          projects: ["GrocyGo", "ShareIt", "Elegant Booking", "Emoji Sprint"],
        }),
      });

      const data = await response.json();
      const parsed = JSON.parse(data.result);

      setResult({
        match: parsed["Match Score"] || 0,
        missingSkills: parsed["Missing but important skills"] || [],
        suggestions: parsed["Suggestions for improvement"] || [],
      });
    } catch (err) {
      console.error("AI Analyzer Error:", err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-950 text-white font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI Job Match Analyzer
        </h1>
        <p className="text-blue-200 text-lg mb-10">
          Paste a job description and let AI compare it with Shivam's resume, skills & projects.
        </p>

        <motion.textarea
          placeholder="Paste the job description here..."
          rows={6}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full bg-slate-800/60 border border-white/20 rounded-xl p-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none transition-all duration-300"
        />

        <motion.button
          onClick={handleAnalyze}
          className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center mx-auto"
          whileHover={{ scale: 1.05 }}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              Analyzing...
            </>
          ) : (
            <>
              <SearchCode className="mr-2" size={20} />
              Analyze with AI
            </>
          )}
        </motion.button>

        {/* Error Message */}
        {error && (
          <motion.div
            className="mt-8 bg-red-500/10 text-red-300 border border-red-400 p-4 rounded-xl flex items-start gap-3 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AlertTriangle className="mt-1" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="mt-12 animate-pulse space-y-4 text-left">
            <div className="h-6 bg-slate-700/50 rounded w-1/2" />
            <div className="h-3 bg-slate-700/30 rounded w-full" />
            <div className="h-3 bg-slate-700/30 rounded w-2/3" />
            <div className="h-3 bg-slate-700/30 rounded w-3/4" />
          </div>
        )}

        {/* Output UI */}
        <AnimatePresence>
          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-left shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
                AI Insights
              </h2>

              <p className="text-blue-100 mb-3">
                <strong>Match Score:</strong>{" "}
                <span className="text-green-400 font-bold">
                  {result.match}%
                </span>
              </p>

              <div className="w-full h-3 bg-slate-800 rounded-full mb-6">
                <div
                  className="h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                  style={{ width: `${result.match}%` }}
                />
              </div>

              <p className="text-blue-100 mb-2">
                <strong>Missing Skills:</strong>{" "}
                {result.missingSkills.length > 0
                  ? result.missingSkills.join(", ")
                  : "None 🎉"}
              </p>
              <p className="text-blue-100">
                <strong>Suggestions:</strong>{" "}
                {result.suggestions.length > 0
                  ? result.suggestions.join(", ")
                  : "Looks great already!"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default JobAnalyzer;
