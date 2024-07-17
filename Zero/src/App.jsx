import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Home3 from './components/Home3';
import About from './components/About';
import Cards from './components/Cards';


function App() {
  return (
    <>
    <div className='bg-zinc-800'>
      <Header />
      <Cards></Cards>
      {/* <Header /> */}
      <Home/>
      {/* <Home3/> */}
    </div>
    </>
  );
}

export default App;
