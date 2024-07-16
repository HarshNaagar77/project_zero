import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Home3 from './components/Home3';
import About from './components/About';


function App() {
  return (
    <>
    <div className='bg-zinc-800'>
      <Header />
      {/* <Header /> */}
      <Home/>
      {/* <Home3/> */}
      <About/>
    </div>
    </>
  );
}

export default App;
