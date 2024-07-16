import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import only ScrollTrigger
import div2img from '../assets/div2img1.jpeg';
import div2img2 from '../assets/div2img2.jpeg';

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

  useEffect(() => {
    // Animation for moving .b1 upwards on hover
    const b1HoverAnimation = gsap.to('.b1', {
      x:-20,
      y: -20, // Move .b1 20px upwards
      duration: 0.3, // Animation duration
      ease: 'power2.inOut', // Easing function for smooth animation
      paused: true, // Start paused initially
    });

    // Mouse enter event handler for .b1
    const handleMouseEnter = () => {
      b1HoverAnimation.play(); // Play the animation on hover
    };


    // Mouse leave event handler for .b1
    const handleMouseLeave = () => {
      b1HoverAnimation.reverse(); // Reverse the animation on mouse leave
    };

    // Attach event listeners
    document.querySelector('.b1')?.addEventListener('mouseenter', handleMouseEnter);
    document.querySelector('.b1')?.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners
    return () => {
      document.querySelector('.b1')?.removeEventListener('mouseenter', handleMouseEnter);
      document.querySelector('.b1')?.removeEventListener('mouseleave', handleMouseLeave);
      b1HoverAnimation.kill(); // Clean up animation
    };
  }, []);

  useEffect(() => {
    // Animation for moving .b2 southeast (downwards and to the right) on hover
    const b2HoverAnimation = gsap.to('.b2', {
      x: 20, // Move .b2 20px to the right
      y: 20, // Move .b2 20px downwards
      duration: 0.3, // Animation duration
      ease: 'power2.inOut', // Easing function for smooth animation
      paused: true, // Start paused initially
    });

    // Mouse enter event handler for .b2
    const handleB2MouseEnter = () => {
      b2HoverAnimation.play(); // Play the animation on hover
    };

    // Mouse leave event handler for .b2
    const handleB2MouseLeave = () => {
      b2HoverAnimation.reverse(); // Reverse the animation on mouse leave
    };

    // Attach event listeners for .b2
    document.querySelector('.b2')?.addEventListener('mouseenter', handleB2MouseEnter);
    document.querySelector('.b2')?.addEventListener('mouseleave', handleB2MouseLeave);

    // Cleanup event listeners and animation for .b2
    return () => {
      document.querySelector('.b2')?.removeEventListener('mouseenter', handleB2MouseEnter);
      document.querySelector('.b2')?.removeEventListener('mouseleave', handleB2MouseLeave);
      b2HoverAnimation.kill(); // Clean up animation
    };
  }, []);

  return (
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

      <div className="home3">
        he
      </div>
    </div>
  );
}

export default Home;
