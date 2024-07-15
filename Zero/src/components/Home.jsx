import React from 'react';


function Home() {
  return (
    <div className="h-screen bg-black flex items-center text-white">
      <div className="w-[18vh] flex justify-center">
        <div className="zero text-[25vh] border-b font-bold transform -rotate-90 text-white  ml-48 tracking-wider">
          ZERO
        </div>
        <div className=' text-white absolute right-32 top-40 box '>
          <h1 className='text-3xl'>Clothes that <br /> Speak Volumes</h1>
          <p className=' font-light pt-5'>Discover expressive fashion <br /> that speaks volumes, reflecting your unique <br /> style and personality effortlessly and elegantly.</p>

          </div>

        <div className="style absolute bottom-7 left-24 ">
          Style Redefined
        </div>

        <div className=' absolute bottom-5 left-[45vw] flex align-bottom'>
          <div className=' rotate-[270deg] mt-1 text-lg'>We have</div>
          
          <div className='-ml-10 font-light'>
            {/* <p className=' border-b'>Style diversity</p> */}
            <p className=' border-b'>Customer focus</p>
            <p className=' border-b'>Quality Emphasis</p>
            <p className=' border-b'>Exclusive Collections</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
