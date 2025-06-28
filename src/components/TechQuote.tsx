// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const techQuotes = [
//   {
//     text: "Any sufficiently advanced technology is indistinguishable from magic.",
//     author: "Arthur C. Clarke",
//   },
//   {
//     text: "Programs must be written for people to read, and only incidentally for machines to execute.",
//     author: "Harold Abelson",
//   },
//   {
//     text: "Innovation is the outcome of a habit, not a random act.",
//     author: "Sundar Pichai",
//   },
//   {
//     text: "Software is a great combination between artistry and engineering.",
//     author: "Bill Gates",
//   },
//   {
//     text: "The best way to predict the future is to invent it.",
//     author: "Alan Kay",
//   },
//   {
//     text: "Design is intelligence made visible.",
//     author: "Alina Wheeler",
//   },
// ];

// const TechQuoteScreen = () => {
//   const [index, setIndex] = useState(0);

//   // Change quote every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * techQuotes.length);
//       setIndex(randomIndex);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-screen bg-[#303D51] flex items-center justify-center relative overflow-hidden">
//       {/* Glowing animated blobs */}
//       <div className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-ping -top-20 -left-20"></div>
//       <div className="absolute w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse bottom-0 right-0"></div>

//       {/* Quote Content */}
//       <div className="relative z-10 max-w-4xl px-8 text-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={techQuotes[index].text}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-white text-2xl md:text-4xl font-semibold font-serif leading-snug italic drop-shadow-lg">
//               “{techQuotes[index].text}”
//             </p>
//             <p className="mt-6 text-cyan-200 text-sm md:text-base font-medium tracking-wide">
//               — {techQuotes[index].author}
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default TechQuoteScreen;
