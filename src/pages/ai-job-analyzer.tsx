import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const JobAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setResult(null);

    const body = {
      jobDescription,
      resumeText: "Full stack developer with experience in React, Node.js, MongoDB, Java.",
      skills: ["React", "Node.js", "MongoDB", "Java", "Tailwind CSS"],
      projects: ["GrocyGo", "ShareIt", "Emoji Sprint"],
    };

    try {
      const res = await fetch("/api/job-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      const parsed = JSON.parse(data.result);
      setResult(parsed);
    } catch (err) {
      alert("Failed to analyze.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-950 text-white p-10">
      <motion.h1 className="text-4xl text-center font-bold mb-6">AI Job Match Analyzer</motion.h1>
      <textarea
        rows={6}
        className="w-full p-4 rounded bg-slate-800 text-white"
        placeholder="Paste job description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-4 bg-cyan-500 text-white px-6 py-3 rounded"
      >
        {loading ? <Loader2 className="animate-spin inline mr-2" /> : null}
        Analyze
      </button>

      {result && (
        <div className="mt-10 bg-white/10 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold">Match Score: {result["Match Score"]}%</h2>
          <p>Missing Skills: {result["Missing but important skills"].join(", ")}</p>
          <p>Suggestions: {result["Suggestions for improvement"].join(", ")}</p>
        </div>
      )}
    </section>
  );
};

export default JobAnalyzer;
