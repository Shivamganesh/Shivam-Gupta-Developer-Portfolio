// import React, { useEffect, useState } from "react";
// import Hero from "./Hero"; 
// import LoadingScreen from "./LoadingScreen";


// const HeroWrapper = () => {
//   const [loading, setLoading] = useState(true);
//   const [showHero, setShowHero] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       setTimeout(() => {
//         setShowHero(true);
//       }, 800); // Fade-in after loader disappears
//     }, 2500); // Show loader for 2.5s

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && <LoadingScreen fadeOut={!loading} />}
//       {showHero && <Hero />}
//     </>
//   );
// };

// export default HeroWrapper;
