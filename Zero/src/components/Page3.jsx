import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import div2img from '../assets/div2img1.png'
import div2img2 from '../assets/div2img2.jpeg'

gsap.registerPlugin(ScrollTrigger);

function Page3() {
  useEffect(() => {
    // Animation for moving the page3 container to the left on scroll
    const bgscroll = gsap.to('.page3', {
    //  backgroundColor : 'black',
    //  color : 'white' ,
      x: '-300vw', // Adjust as needed for the amount of movement
      scrollTrigger: {
        trigger: '.main3',
        start: 'top top', // Trigger when page3 is at the top of the viewport
        end: 'bottom bottom', // End when the bottom of page3 hits the top of the viewport
        scrub: true,
        // markers: true,
        pin:true
      },
    });
    gsap.from('.p3i' , {
      x :300,

      scrollTrigger : {
        trigger : '.page3',
        start : 'top top',
        end : 'bottom bottom',
        markers : true,
        scrub : true,
      }
      
    })
    gsap.to('.p3i' , {
      scale : 1.5,

      scrollTrigger : {
        trigger : '.page3',
        start : 'top top',
        end : 'bottom bottom',
        markers : true,
        scrub : true,
      }
      
    })

    return () => {
      // Clear animation on component unmount
      bgscroll.kill();
    };
  }, []);

  return (
    <div className="main3">
      <div className='page3'>
        <div className="scroll flex  space-y-8 p-4">
          <div className="scrollf">
            <div className='scrolls'>
            <div className='page3head1'>Reimagine The<br /> <div className='page3head2'> Style You Wear.</div></div>
            <img src={div2img} alt="" className="scrollfimg" />
            </div>
            <div className="explore">Explore</div>
          </div>
          <div className="relative flex ">
            <img src={div2img} alt="Placeholder 1" className="p3i w-40 h-40 object-cover rounded-full shadow-md mr-10 mt-11 top-10% left-0% transition-transform duration-300 hover:scale-150 hover:shadow-xl relative z-10" />
            <p className="text-gray text-xl mt-24 right-10 relative z-0">Here is some text to go with the first image.<br/> It provides context and description related to the image.</p>
          </div>
          <div className="relative flex ">
            <img src={div2img} alt="Placeholder 1" className="p3i w-40 h-40 object-cover rounded-full shadow-md mr-10 mt-96 hover:scale-150 transition-transform duration-300 hover:shadow-xl relative z-10 " />
            <p className=" text-gray text-xl font-bold  relative mt-[70%] right-9 ">Here is some text to go with the first image.<br/> It provides context and description related to the image.</p>
          </div>
          <div className="relative flex ">
            <img src={div2img} alt="Placeholder 1" className="p3i w-40 h-40 object-cover rounded-full shadow-md mr-10 mt-24 relative z-10 transition-transform duration-300 hover:scale-150 hover:shadow-xl" />
            <p className="text-gray-700 text-lg font-bold relative mt-32 right-[5%] z-0 mix-blend-multiply">Here is some text to go with the first image.<br/> It provides context and description related to the image.</p>
          </div>
          <div className="relative flex ">
            <img src={div2img} alt="Placeholder 1" className="p3i w-40 h-40 object-cover rounded-full shadow-md mr-10 mt-44 relative z-10 transition-transform duration-300 hover:scale-150 hover:shadow-xl" />
            <p className="text-gray-700 text-lg font-bold relative mt-52 right-[5%] z-0 mix-blend-multiply">Here is some text to go with the first image.<br/> It provides context and description related to the image.</p>
          </div>
          <div className="relative flex ">
            <img src={div2img} alt="Placeholder 1" className="p3i w-40 h-40 object-cover rounded-full shadow-md mr-10 mt-11 relative z-10 transition-transform duration-300 hover:scale-150 hover:shadow-xl" />
            <p className="ml-4  text-gray-700 text-lg p-2 rounded font-bold relative mt-24 right-16">Here is some text to go with the first image.<br/> It provides context and description related to the image.</p>
          </div>
          <div className="relative flex items-center justify-end">
            <p className="mr-4 left-6 text-gray-700 text-lg p-2 relative font-bold rounded">Another piece of text to describe the second image.<br/> This adds more information and detail.</p>
            <img src={div2img2} alt="Placeholder 2" className="p3i w-40 h-40 object-cover rounded-lg shadow-md relative z-10 transition-transform duration-300 hover:scale-150 hover:shadow-xl" />
          </div>
          <div className="relative ">
            <img src={div2img} alt="Placeholder 3" className="p3i w-40 h-40 object-cover rounded-lg shadow-md" />
            {/* <p className="ml-4 bg-gray-800 text-white text-sm p-2 rounded">Additional text for the third image. This helps to further explain the content or message being conveyed.</p> */}
          </div>
          
          <div className="relative flex items-center justify-end">
            {/* <p className="mr-4 bg-gray-800 text-white text-sm p-2 rounded">More descriptive text for the fourth image, enhancing the viewer's understanding of the visuals.</p> */}
            <img src={div2img2} alt="Placeholder 4" className="p3i w-40 h-40 object-cover rounded-full shadow-md" />
          </div>
        </div>
        <div className="scroll scroll2 flex flex-col space-y-8 p-4">
          <div className="relative flex items-center">
            <img src={div2img} alt="Placeholder 5" className="p3i w-40 h-40 object-cover rounded-lg shadow-md" />
            {/* <p className="ml-4 bg-gray-800 text-white text-sm p-2 rounded">Text for the fifth image, describing its context and relevance.</p> */}
          </div>
          <div className="relative flex items-center justify-end">
            {/* <p className="mr-4 bg-gray-800 text-white text-sm p-2 rounded">Text for the sixth image, providing additional details and context.</p> */}
            <img src={div2img2} alt="Placeholder 6" className="p3i w-40 h-40 object-cover rounded-full shadow-md" />
          </div>
          <div className="relative flex items-center">
            <img src={div2img} alt="Placeholder 7" className="p3i w-40 h-40 object-cover rounded-lg shadow-md" />
            {/* <p className="ml-4 bg-gray-800 text-white text-sm p-2 rounded">Text for the seventh image, adding more insight into its significance.</p> */}
          </div>
          <div className="relative flex items-center justify-end">
            {/* <p className="mr-4 bg-gray-800 text-white text-sm p-2 rounded">Text for the eighth image, enhancing the viewer's understanding further.</p> */}
            <img src={div2img2} alt="Placeholder 8" className="p3i w-40 h-40 object-cover rounded-full shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
