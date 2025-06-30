import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, Loader2, AlertCircle } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const ResumeReviewer = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      return;
    }

    setError("");
    setUploadedFile(file);
    setResult(null);
    setLoading(true);

    try {
      const pdfData = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

      let resumeText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
       resumeText += content.items
  .map((item) => {
    if ("str" in item) return item.str;
    return "";
  })
  .join(" ") + "\n";

      }

      const response = await fetch("/api/resume-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText }),
      });

      const data = await response.json();
      const parsed = JSON.parse(data.result);

      setResult({
        score: parsed["Resume Score"] || 0,
        keywords: parsed["Matched Keywords"] || [],
        suggestions: parsed["Suggestions for improvement"] || [],
      });
    } catch (err) {
      console.error("Resume parse/analyze error:", err);
      setError("Something went wrong while analyzing the resume.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-950 via-blue-950 to-violet-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
          Upload Your Resume & Let AI Do the Magic
        </h1>
        <p className="text-blue-200 text-lg mb-10">
          Receive an AI-powered resume score, keyword match, and improvement tips – all in seconds.
        </p>

        {/* File Upload UI */}
        <label
          htmlFor="resume-upload"
          className="cursor-pointer group relative inline-block w-full max-w-md mx-auto border-2 border-dashed border-purple-400 p-10 rounded-2xl hover:border-pink-500 transition-all duration-300"
        >
          <input
            id="resume-upload"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />
          <UploadCloud size={36} className="mx-auto text-pink-300 group-hover:scale-110 transition-transform" />
          <p className="mt-4 text-purple-200">Click or Drag & Drop your resume PDF</p>
        </label>

        {/* Loading */}
        {loading && (
          <div className="mt-10 flex items-center justify-center text-pink-300">
            <Loader2 className="mr-2 animate-spin" />
            Analyzing resume with AI...
          </div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            className="mt-6 bg-red-500/10 text-red-300 border border-red-400 p-4 rounded-xl flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AlertCircle />
            {error}
          </motion.div>
        )}

        {/* Output UI */}
        <AnimatePresence>
          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-pink-300 flex items-center justify-center gap-2 mb-4">
                <FileText size={24} /> AI Resume Insights
              </h2>
              <p className="text-blue-100 mb-2">
                <strong>Score:</strong>{" "}
                <span className="text-green-400 font-bold">{result.score}%</span>
              </p>

              {/* Progress bar */}
              <div className="w-full h-3 bg-slate-800 rounded-full mb-6">
                <div
                  className="h-3 bg-gradient-to-r from-green-400 to-pink-400 rounded-full"
                  style={{ width: `${result.score}%` }}
                />
              </div>

              <p className="text-blue-100 mb-2">
                <strong>Matched Keywords:</strong>{" "}
                {result.keywords.length > 0 ? result.keywords.join(", ") : "None"}
              </p>
              <p className="text-blue-100">
                <strong>Suggestions:</strong>{" "}
                {result.suggestions.length > 0 ? result.suggestions.join(", ") : "No suggestions needed 🎉"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ResumeReviewer;
