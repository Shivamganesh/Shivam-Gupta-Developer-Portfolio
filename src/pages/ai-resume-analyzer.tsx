import React, { useState } from "react";
import { extractTextFromPdf } from "../../utils/extractTextFromPdf";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const ResumeReviewer = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") return;

    setLoading(true);
    setResult(null);

    const resumeText = await extractTextFromPdf(file);

    const response = await fetch("/api/resume-analyzer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resumeText }),
    });

    const data = await response.json();
    const parsed = JSON.parse(data.result);

    setResult(parsed);
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-950 to-violet-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">AI Resume Reviewer</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-4" />

      {loading && (
        <div className="text-pink-300 flex items-center">
          <Loader2 className="animate-spin mr-2" /> Analyzing resume...
        </div>
      )}

      {result && (
        <div className="mt-10 bg-white/10 p-6 rounded-lg text-white">
          <h2 className="text-xl font-bold">Resume Score: {result["Resume Score"]}%</h2>
          <p>Matched Keywords: {result["Matched Keywords"].join(", ")}</p>
          <p>Suggestions: {result["Suggestions for improvement"].join(", ")}</p>
        </div>
      )}
    </section>
  );
};

export default ResumeReviewer;
