import React, { useEffect } from 'react';
import "../Cards.css";

export default function Cards() {
  useEffect(() => {
    const card = document.querySelector('.cards');
    const card1 = document.querySelector('.card1')
    const card2 = document.querySelector('.card2')
    const card3 = document.querySelector('.card3')
    card.addEventListener('click', function() {
      card1.style.transform = 'rotate(60deg)';
      card1.style.marginTop = '250px'
      card1.style.marginLeft = '350px'
      card2.style.transform = 'rotate(-60deg)';
      card2.style.marginTop = '220px'
      card2.style.marginLeft = '-350px'
    });
    
    card1.addEventListener('click' , function(){
        card.style.transform = 'rotate(-60deg)';
        card.style.marginTop = '350px'
        card.style.marginLeft = '-500px'

    })

    card3.addEventListener('click' , function(){
        card.style.transform = 'rotate(0deg)';
        card.style.marginTop = '00px'
        card.style.marginLeft = '0px'
    })

    return () => {
      card.removeEventListener('click', function() {
        card1.style.transform = 'rotate(50deg)';
      });
    };
  }, []);

  return (
    <div className="cards">
      <div className="card card1"></div>
      <div className="card card2"></div>
      <div className="card card3"></div>
      {/* <div className="card card4"></div>
      <div className="card card5"></div>
      <div className="card card6"></div> */}
    </div>
  );
}
