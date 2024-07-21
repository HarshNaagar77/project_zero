import React, { useEffect } from 'react';
import "../Cards.css";
import card1img from '../assets/card1.jpg'
import card2img from '../assets/card2.jpeg'
import card3img from '../assets/card3.avif'

export default function Cards() {


 useEffect(() => {
    const card = document.querySelector('.cards')
    const body = document.querySelector('body')
    const main = document.querySelector('.maincard')
    const card1 = document.querySelector('.card1')
    const card2 = document.querySelector('.card2')
    const card3 = document.querySelector('.card3')
    const card4 = document.querySelector('.card4')
    const card5 = document.querySelector('.card5')
    body.addEventListener('mouseover' , function(){
        card1.style.transform = 'rotate(50deg)' 
        card1.style.marginTop = "150px"
        card1.style.marginLeft = "300px"
        card2.style.transform = 'rotate(-50deg)' 
        card2.style.marginTop = "150px"
        card2.style.marginLeft = "-300px"


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
      <div className="card card1">
        <img className='cardimg' src={card1img} alt="" />
      </div>
      <div className="card card2">
      <img className='cardimg' src={card2img} alt="" />
      </div>
      <div className="card card3">
      <img className='cardimg' src={card3img} alt="" />
      </div>

    </div>
    {/* <div className="circ"></div> */}
      </div>
  );
}
