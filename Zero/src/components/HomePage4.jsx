// import React from 'react'
import t1 from "../assets/t1-removebg-preview.png"
import t2 from "../assets/t2-removebg-preview.png"

function HomePage4() {
  return (
    <div className="page4 h-screen flex items-center justify-between">
      <div className="relative flex-1 flex justify-center items-center">
        <img src={t1} alt="" className="relative mb-44 h-auto max-h-full transform -rotate-[30deg] right-36" />
        <h1 className="absolute top-1/4 mt-20 right-20 text-center font-extrabold text-6xl leading-tight transition-transform duration-300 ease-in-out">
          <span className="text-white hover:scale-110 hover:underline">This is the</span> <span className="text-black hover:scale-110 hover:underline">new Gen</span>
        </h1>
      </div>
      <div className="relative flex-1 flex justify-center items-center">
        <img src={t2} alt="" className="relative right-0 h-auto max-h-full" />
        <h1 className="absolute top-1/4 right-48 text-center font-extrabold text-5xl leading-tight transition-transform duration-300 ease-in-out">
          <span className="text-black hover:scale-110 hover:underline">Experience</span><span className="text-white hover:scale-110 hover:underline">e the Future Now</span>
        </h1>
      </div>
    </div>
  );
}

export default HomePage4