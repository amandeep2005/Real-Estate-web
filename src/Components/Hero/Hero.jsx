import React, { useRef } from "react";
import {HiLocationMarker} from "react-icons/hi";
import "./hero.css";
import CountUp from "react-countup";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Hero() {

  const h1Title = useRef(null)
  const image = useRef(null)

  useGSAP(()=> {
    gsap.from(h1Title.current,{
      y:50,
      duration:2,
      delay:0.5,
      opacity:0,
    })
  })

  useGSAP(()=> {
    gsap.from(image.current,{
      x:100,
      opacity:0,
      duration:1,
      delay:0.5,
    })
  })

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title" ref={h1Title}>
            <div className="orange-circle"></div>
          <h1 >
            Discover <br />
            Most Suitable <br />
            Property
          </h1>
        </div>
        <div className="secondaryText flexColStart hero-des">
          <span>Find a variety of properties that suit you very easilty</span>
          <span>Forget all difficulties in finding a residence for you</span>
        </div>
        <div className="flexCenter search-bar">
          <HiLocationMarker color={'var(--blue)'}  size={25} className="locationIcon"/>
          <input type="text" placeholder="Search residence "/>
          <button className="button">search</button>
        </div>
        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={8800} end={9000} duration={4}/>
              <span>+</span>
            </span>
            <span className="secondaryText">Premium Products</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp start={1980} end={2000} duration={4}/>
              <span>+</span>
            </span>
            <span className="secondaryText">Happy Customers</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp  end={28} />
              <span>+</span>
            </span>
            <span className="secondaryText">Award Winning</span>
          </div>
        </div>
        </div>
        {/* right side */}
        <div ref={image} className="hero-right flexCenter">
          <div className="image-container">
            <img src="./public/hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
