import React, { useEffect, useState } from "react";



const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowMain(true);
      }, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showMain && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
            fadeOut ? "opacity-0 scale-90" : "opacity-100"
          } bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 overflow-hidden`}
        >

          <div className="absolute inset-0">
            <div className="particle top-[20%] left-[20%] bg-cyan-300 animation-delay-0"></div>
            <div className="particle top-[70%] right-[30%] bg-blue-300 animation-delay-2000"></div>
            <div className="particle top-[40%] left-[70%] bg-purple-300 animation-delay-1000"></div>
          </div>

        
          <div className="absolute w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 -top-10 -left-10 z-0"></div>

      
         <div className="text-center space-y-10 relative z-10">
  {/* Enlarged Avatar */}
  <div className="slide-up-animation">
    <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-70 animate-rotate-slow z-0"></div>
      <div className="relative z-10 border-4 border-white/10 rounded-full overflow-hidden shadow-xl shadow-cyan-400/30">
        <img
          src="/Projectimage/chatgptimg.png"
          alt="Shivam Gupta"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Larger Name + Text */}
  <div className="slide-up-animation delay-[200ms]">
    <h2 className="text-4xl font-bold text-white mb-2">Shivam Gupta</h2>
    <p className="text-xl text-blue-200 opacity-90">Loading Portfolio...</p>
  </div>

  {/* Bigger Dots */}
  <div className="flex justify-center space-x-3 slide-up-animation delay-[400ms]">
    <div className="loading-dot w-4 h-4 bg-cyan-400 rounded-full"></div>
    <div className="loading-dot w-4 h-4 bg-blue-400 rounded-full"></div>
    <div className="loading-dot w-4 h-4 bg-purple-400 rounded-full"></div>
  </div>

  {/* Wider Progress Bar */}
  <div className="w-80 mx-auto slide-up-animation delay-[600ms]">
    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
      <div className="progress-bar bg-gradient-to-r from-cyan-400 to-purple-400 h-full rounded-full"></div>
    </div>
  </div>
</div>

        </div>
      )}
    </>
  );
};

export default LoadingScreen;
