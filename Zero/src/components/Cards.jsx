
import React, { useEffect } from 'react';
import "../Cards.css";

export default function Cards() {
//   useEffect(() => {
//     const card = document.querySelector('.cards');
//     const card1 = document.querySelector('.card1')
//     const card2 = document.querySelector('.card2')
//     const card3 = document.querySelector('.card3')
//     card.addEventListener('click', function() {
//       card1.style.transform = 'rotate(60deg)';
//       card1.style.marginTop = '250px'
//       card1.style.marginLeft = '400px'
//       card2.style.transform = 'rotate(-60deg)';
//       card2.style.marginTop = '220px'
//       card2.style.marginLeft = '-400px'
//     });
    
//     card1.addEventListener('click' , function(){
//         card.style.transform = 'rotate(-60deg)';
//         card.style.marginTop = '350px'
//         card.style.marginLeft = '-500px'

//     })

//     card3.addEventListener('click' , function(){
//         card.style.transform = 'rotate(0deg)';
//         card.style.marginTop = '00px'
//         card.style.marginLeft = '0px'
//     })

//     return () => {
//       card.removeEventListener('click', function() {
//         card1.style.transform = 'rotate(50deg)';
//       });
//     };
//   }, []);

 useEffect(() => {
    const card = document.querySelector('.cards')
    const main = document.querySelector('.maincard')
    const card1 = document.querySelector('.card1')
    const card2 = document.querySelector('.card2')
    const card3 = document.querySelector('.card3')
    const card4 = document.querySelector('.card4')
    const card5 = document.querySelector('.card5')
    card.addEventListener('mouseover' , function(){
        card1.style.transform = 'rotate(50deg)' 
        card1.style.marginTop = "150px"
        card1.style.marginLeft = "300px"
        card2.style.transform = 'rotate(-50deg)' 
        card2.style.marginTop = "150px"
        card2.style.marginLeft = "-300px"
        // card3.style.transform = 'rotate(50deg)'
        // card3.style.marginLeft = "-300px"
        // card3.style.marginTop = "525px"
        // card4.style.transform = 'rotate(-50deg)'
        // card4.style.marginLeft = "300px"
        // card4.style.marginTop = "525px"
        // card5.style.marginTop = '680px'

    })
    // card1.addEventListener('click' , function(){
    //     card.style.transform = 'rotate(180deg)'
    //     card.style.marginTop = '1000px'
    //     card.style.marginLeft = '870px'

    // })

 }, [])

  return (
    <div className="maincard">
    <div className="cards">
      <div className="card card1"></div>
      <div className="card card2"></div>
      <div className="card card3"></div>
      <div className="card card4"></div>
      <div className="card card5"></div>
      <div className="card card6"></div>
      {/* <div className="card card4"></div>
      <div className="card card5"></div>
      <div className="card card6"></div> */}
    </div>
    {/* <div className="circ"></div> */}
      </div>
  );
}