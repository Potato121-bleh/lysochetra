'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import traprofile from './picture/Homenobg1.png';
import Link from "next/link";
import "./Addon.css"
export default function Home() {
  let [moveDNLball, SetmoveDNLball] = useState()
  let [freezeDNLball, SetfreezeDNLball] = useState();
  let [text, Settext] = useState();
  let [bg, Setbg] = useState();
  let [board, Setboard] = useState();
  let count = 0;
  
  function handleclick(){
    count ++;
    if(count % 2 == 0){
      SetmoveDNLball("movebackDNLball")
      setTimeout(() => {
        SetfreezeDNLball("freezebackDNLball")
        Setbg("changebg2white");
        Settext("changecolor2black")
        Setboard("changebg2gray")
      }, 500)
    }
    else {
      SetmoveDNLball("moveDNLball")
      setTimeout(() => {
        SetfreezeDNLball("freezeDNLball")
        Setbg("changebg2gray");
        Settext("changecolor2white")
        Setboard("changebg2black")
      }, 500)
    } 
  }
  return (
    <>
          <div onClick={handleclick} className='header-DNL-box'>
                <div className={`header-DNL-ball ${moveDNLball} ${freezeDNLball}`} ></div>
            </div>
    <div className={`home-children-main ${bg}`}>
      <div className={`home-main-container ${board}`}  >
            <div className="home-picture4-absolute">
            <Image id="home-profile-pic" src={traprofile} ></Image>
              {/* This is an object that obsolute over the picture */}
              {/*<div className={`home-circle1 ${board}`} ></div>
              <div className={`home-box1 ${board}`}></div>
  <div className={`home-box2 ${board}`} ></div>*/}
        </div>
        <div className={`home-text-con ${text}`} >
          <p className="home-small-text1">Hi! My name is</p>
          <h1 className="home-h1-text">Ly Sochetra</h1>
          <p className="home-small-text">I'm a Front-End Developer. welcome to my website, I hope this website helps you to know more about me and I'm so excited to let you explore all of my project and achievement.</p>
          <br/>
          <div className="home-explore-con">
          <Link href='./project' className='home-explore-btn'  >Explore</Link>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
