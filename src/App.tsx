// App.jsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPostPage from "./pages/BlogPostPage";
import LoadingPage from './components/LoadingScreen';
import AiAnalyzerPage from "./pages/AiAnalyzerPage";
import AIJobAnalyzer from "./pages/ai-job-analyzer";
import AIResumeAnalyzer from "./pages/ai-resume-analyzer";


const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading delay or wait for data fetch
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this time based on real loading behavior

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage  />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
             <Route path="/ai-analyzer" element={<AiAnalyzerPage />} />
                    <Route path="/ai-job-analyzer" element={<AIJobAnalyzer />} />
                            <Route path="/ai-resume-analyzer" element={<AIResumeAnalyzer />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
