import React, { useEffect } from 'react';
import "../Cards.css";

export default function Cards() {
  useEffect(() => {
    const card = document.querySelector('.cards');
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');

    const handleMouseEnterCard = () => {
      card1.style.transform = 'rotate(60deg)';
      card1.style.marginTop = '250px';
      card1.style.marginLeft = '350px';
      card2.style.transform = 'rotate(-60deg)';
      card2.style.marginTop = '220px';
      card2.style.marginLeft = '-350px';
    };

    const handleMouseLeaveCard = () => {
      card1.style.transform = 'rotate(0deg)';
      card1.style.marginTop = '0px';
      card1.style.marginLeft = '0px';
      card2.style.transform = 'rotate(0deg)';
      card2.style.marginTop = '0px';
      card2.style.marginLeft = '0px';
      card.style.transform = 'rotate(0deg)';
      card.style.marginTop = '0px';
      card.style.marginLeft = '0px';
    };

    card.addEventListener('mouseenter', handleMouseEnterCard);
    card.addEventListener('mouseleave', handleMouseLeaveCard);

    card1.addEventListener('mouseenter', function () {
      card.style.transform = 'rotate(-60deg)';
      card.style.marginTop = '350px';
      card.style.marginLeft = '-500px';
    });

    card1.addEventListener('mouseleave', handleMouseLeaveCard);

    card3.addEventListener('mouseenter', function () {
      card.style.transform = 'rotate(0deg)';
      card.style.marginTop = '0px';
      card.style.marginLeft = '0px';
    });

    card3.addEventListener('mouseleave', handleMouseLeaveCard);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnterCard);
      card.removeEventListener('mouseleave', handleMouseLeaveCard);
      card1.removeEventListener('mouseenter', handleMouseEnterCard);
      card1.removeEventListener('mouseleave', handleMouseLeaveCard);
      card3.removeEventListener('mouseenter', handleMouseEnterCard);
      card3.removeEventListener('mouseleave', handleMouseLeaveCard);
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
