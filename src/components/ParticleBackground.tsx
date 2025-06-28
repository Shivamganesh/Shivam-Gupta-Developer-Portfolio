// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollVideoMorphSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//           pin: true,
//         },
//       });

//       tl.to(".headline", {
//         scale: 5,
//         clipPath: "inset(55%)",
//         duration: 1,
//       }, 0)
//       .to(".video_reveal", {
//         opacity: 1,
//         clipPath: "circle(150% at center)",
//         duration: 1,
//       }, 0.5);
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
// <section
//   ref={sectionRef}
//   className="relative h-[100vh] bg-gradient-to-b from-[#0B132B] to-[#1C2541] text-white overflow-hidden"
// >
//   {/* Sticky Morphing Text */}
//   <div className="sticky top-0 h-screen flex justify-center items-center z-20">
//     <h1
//       className="headline text-5xl md:text-[6vw] font-extrabold text-center uppercase tracking-wider bg-clip-text text-transparent"
//       style={{
//         backgroundImage: 'linear-gradient(to right, #06b6d4, #3b82f6, #a855f7)',
//         WebkitBackgroundClip: 'text',
//         color: 'transparent',
//         clipPath: 'inset(0%)',
//         transition: 'clip-path 0.3s ease',
//       }}
//     >
//       Cool Scenery
//     </h1>
//   </div>

//   {/* Video Reveal */}
//   <div
//     className="video_reveal absolute top-0 left-0 w-full h-screen z-10 opacity-0"
//     style={{
//       clipPath: 'circle(0% at center)',
//       transition: 'clip-path 0.5s ease',
//     }}
//   >
//     <video
//       src="/Projectimage/wlkr.mp4"
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="w-full h-full object-cover"
//     />
//   </div>
// </section>

//   );
// }
