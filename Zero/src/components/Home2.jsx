import React from 'react'
import div2img from '../assets/div2img1.jpeg'



export default function Home2() {
  return (
    <div>
       <div className="h-[100vh] w-full mt-[200vh] text-black">
        <div className=' div2text'>Discover timeless elegance <br /> and modern flair with fashion that <br /> defines your unique style and personality.</div>
        <div className="absolute b1 borders w-64 ">
          <img src={div2img} alt=""  className='div2img w-56 mt-2'/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum!
          </p>

          <p className=' bg-purple-400 mb-2'>Lorem, ipsum.</p>
        </div>
      </div>
      
      <div className="  text-black">
        <div className=' div2text'>Discover timeless elegance <br /> and modern flair with fashion that <br /> defines your unique style and personality.</div>

        <div className="div2head absolute left-10 top-[150vh] text-black"><h1><span>Discover the  latest</span><br /> <span>trends in fashion and</span> <br /> <span> elevate your wardrobe with us.</span></h1></div>

        <div className="absolute b2 borders w-64 ">
          <img src={div2img} alt=""  className='div2img w-56 mt-2'/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum!
          </p>

          <p className=' bg-purple-400 mb-2'>Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  )
}
