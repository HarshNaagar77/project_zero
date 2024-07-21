import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import only ScrollTrigger
import div2img from '../assets/div2img1.jpeg';
import div2img2 from '../assets/div2img2.jpeg';
import Page3 from './Page3';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Animation for background color change on scroll
    const backgroundColorAnimation = gsap.to('body', {
      backgroundColor: 'white',
      color: 'black',
      scrollTrigger: {
        trigger: 'body',
        start: '80%',
        end: 'bottom top',
        scrub: true,
      },
    }); 
    const jpg = gsap.to('.div2img', {
      opacity:1 ,
      scrollTrigger: {
        trigger: 'body',
        start: '80%',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, []);
  return (
    <div>

    <div className="h-screen bg-black flex items-center text-white">
      <div className="w-[18vh] flex justify-center">
        <div className="zero text-[25vh] border-b font-bold transform -rotate-90 text-white ml-48 tracking-wider">
          ZERO
        </div>
        <div className='text-white absolute right-32 top-40 box '>
          <h1 className='text-3xl'>Clothes that <br /> Speak Volumes</h1>
          <p className='font-light pt-5'>Discover expressive fashion <br /> that speaks volumes, reflecting your unique <br /> style and personality effortlessly and elegantly.</p>
        </div>

        <div className="style absolute bottom-7 left-24 ">
          Style Redefined
        </div>

        <div className='absolute bottom-5 left-[45vw] flex align-bottom'>
          <div className='rotate-[270deg] mt-1 text-2xl'>We have</div>
          
          <div className='-ml-10 font-light'>
            <p className='border-b'>Customer focus</p>
            <p className='border-b'>Quality Emphasis</p>
            <p className='border-b'>Exclusive Collections</p>
          </div>
        </div>
      </div>

      <div className="div2 h-[100vh] w-full mt-[200vh] text-black">
        <div className='div2text'>Discover timeless elegance <br /> and modern flair with fashion that <br /> defines your unique style and personality.</div>
        <div className="absolute b1 borders w-64 ">
          <img src={div2img} alt=""  className='div2img w-56 mt-2'/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum!
          </p>

          <p className=' bg-purple-200 mb-2'>Lorem, ipsum.</p>
        </div>
        <div className="absolute b2 borders w-64 ">
          <img src={div2img2} alt=""  className='div2img w-56 mt-2'/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum!
          </p>

          <p className=' bg-purple-200 mb-2'>Lorem, ipsum.</p>
        </div>
      </div>
      
      <div className="  text-black">
        <div className=' absolute left-10 top-[155vh] h-20 w-20 bg-black'></div>
        <div className="div2head absolute left-10 top-[167vh] text-black"><h1><span>Discover the  latest</span><br /> <span>trends in fashion and</span> <br /> <span> elevate your wardrobe with us.</span></h1></div>
        
      </div>
    </div>
    </div>
  );
}

export default Home;
