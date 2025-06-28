// import React from "react";

// const experiences = [
//   {
//     title: "Mobile UI Design",
//     imgLeft: "/images/mobile-1.png",
//     imgRight: "/images/mobile-2.png"
//   },
//   {
//     title: "Web UI Showcase",
//     imgLeft: "/images/web-1.png",
//     imgRight: "/images/web-2.png"
//   },
//   {
//     title: "Creative Strategy",
//     imgLeft: "/images/creative-1.png",
//     imgRight: "/images/creative-2.png"
//   }
// ];

// const ExperienceHoverSection = () => {
//   return (
//     <div className="min-h-screen w-full z-[9] relative px-[5vw] py-[10vh] bg-[#1B2440]">
//       {experiences.map((item, index) => (
//         <div
//           className="relative flex items-center justify-center mb-4 group"
//           key={index}
//         >
//           <img
//             src={item.imgLeft}
//             alt="left"
//             className="absolute left-[2%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:translate-y-0 group-hover:rotate-0 translate-y-4 rotate-2"
//           />
//           <div className="relative h-[16vh] z-[9] overflow-hidden cursor-pointer">
//             <h1 className="text-[2vw] font-semibold transition-all duration-500 ease-out group-hover:-translate-y-full group-hover:text-[#EDBFFF]">
//               {item.title}
//             </h1>
//             <h1 className="text-[2vw] font-semibold absolute top-full transition-all duration-500 ease-out">
//               {item.title}
//             </h1>
//           </div>
//           <img
//             src={item.imgRight}
//             alt="right"
//             className="absolute right-[5%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:translate-y-0 group-hover:rotate-0 translate-y-4 rotate-2"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExperienceHoverSection;
