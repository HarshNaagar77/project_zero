import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Page3() {
  useEffect(() => {
    // Animation for background color change on scroll
    const bgscroll = gsap.to('.page3', {
      x: '-400vh',
      scrollTrigger: {
        trigger: '.scroll',
        start: 'bottom 100%',
        end: 'top 10%',
        scrub: true,
        markers: true,
      },
    });

    return () => {
      // Clear animation on component unmount
      bgscroll.kill();
    };
  }, []);

  return (
    <div className='page3'>
      <div className="scroll">d</div>
      <div className="scroll scroll2">d</div>
      <div className="scroll scroll3">d</div>
      <div className="scroll">d</div>
    </div>
  );
}

export default Page3;
