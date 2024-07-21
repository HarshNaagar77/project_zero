import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Cards from './components/Cards';
import Page3 from './components/Page3'


function App() {
  return (
    <>
    <div className='bg-zinc-800'>
      <Header />
      <Cards></Cards>
      <Home/>
      <Page3></Page3>

    </div>
    </>
  );
}

export default App;
