// // pages/parallax-page.tsx
// 'use client';

// import { ParallaxCard } from "@/components/ParallaxCard";

// export default function ParallaxPage() {
//   return (
//     <div className="bg-background text-foreground px-6 py-20 space-y-20">
//       <h1 className="text-center text-4xl font-bold mb-10">Parallax Effect Demo</h1>

//       {/* ParallaxCard with different speeds */}
//       <ParallaxCard speed={30}>
//         <div className="bg-primary text-white rounded-2xl shadow-lg p-10 text-xl">
//           <img 
//             src="https://unsplash.com/photos/young-asian-travel-woman-is-enjoying-with-beautiful-place-in-bangkok-thailand-_Fqoswmdmoo" 
//             alt="Image for Card One" 
//             className="rounded-2xl mb-4"
//           />
//           Card One — Slower
//         </div>
//       </ParallaxCard>

//       <ParallaxCard speed={60}>
//         <div className="bg-secondary text-white rounded-2xl shadow-lg p-10 text-xl">
//           <img 
//             src="https://via.placeholder.com/400x200" 
//             alt="Image for Card Two" 
//             className="rounded-2xl mb-4"
//           />
//           Card Two — Medium
//         </div>
//       </ParallaxCard>

//       <ParallaxCard speed={90}>
//         <div className="bg-accent text-white rounded-2xl shadow-lg p-10 text-xl">
//           <img 
//             src="https://via.placeholder.com/400x200" 
//             alt="Image for Card Three" 
//             className="rounded-2xl mb-4"
//           />
//           Card Three — Faster
//         </div>
//       </ParallaxCard>
//     </div>
//   );
// }
