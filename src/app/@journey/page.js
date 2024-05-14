'use client'
import Image from "next/image";
import htmlpic from './../picture/journeypic/html-no-bg.png';
import csspic from './../picture/journeypic/css-no-bg.png';
import reactpic from './../picture/journeypic/react-no-bg.png'
import jspic from './../picture/journeypic/javascript-no-bg.png';
import nextjspic from './../picture/journeypic/nextjs-no-bg.png'
import './../globals.css';
let count = 0;
import { useState } from "react";
export default function journey(){
    
    let [html, Sethtml] = useState();
    let [css, Setcss] = useState();
    let [js, Setjs] = useState();
    let [react, Setreact] = useState();
    let [nextjs, Setnextjs] = useState();

    let [displaygoback, Setdisplaygoback] = useState("freezehide");
    let [displayddhtml, Setdisplayddhtml] = useState("freezehide");
    let [displayddcss, Setdisplayddcss] = useState("freezehide");
    let [displayddjs, Setdisplayddjs] = useState("freezehide");
    let [displayddreact, Setdisplayddreact] = useState("freezehide");
    let [displayddnextjs, Setdisplayddnextjs] = useState("freezehide");
    let [displayhtmlline, Setdisplayhtmlline] = useState()
    let [displayjsline, Setdisplayjsline] = useState()
    let [displaynextjsline, Setdisplaynextjsline] = useState()
    let [displaycssline, Setdisplaycssline] = useState()
    let [displayreactline, Setdisplayreactline] = useState()


    function handlegoback(){
        setTimeout(() => {
            Setdisplayddhtml("freezehide")
        Setdisplayddcss("freezehide")
        Setdisplayddjs("freezehide")
        Setdisplayddreact("freezehide")
        Setdisplayddnextjs("freezehide")
        Setdisplayhtmlline("")
        Setdisplayjsline("")
        Setdisplaynextjsline("")
        Setdisplaycssline("")
        Setdisplayreactline("")
            Sethtml("freezeshow")
            Setcss("freezeshow")
            Setjs("freezeshow")
            Setreact("freezeshow")
            Setnextjs("freezeshow");
            Setdisplaygoback("freezehide")
            count = 0;
        }, 500);
    }
    function handlehtml(){
        count ++;
        console.log(count)
        if(count === 1){
            Setcss("hide")
            Setjs("hide")
            Setreact("hide")
            Setnextjs("hide");
            Setdisplaygoback("freezeshow")
            setTimeout(() => {
                Setcss("freezehide")
                Setjs("freezehide")
                Setreact("freezehide")
                Setnextjs("freezehide");
                Setdisplayddhtml("show")
                Setdisplayhtmlline("freezehide")
                setTimeout(() => {
                    Setdisplayddhtml("freezeshow")
                }, 300);
            }, 300);
            count ++;
        }
    }
    function handlejavascript(){
        count ++;
        console.log(count)
        if(count === 1){
            Setcss("hide")
            Sethtml("hide")
            Setreact("hide")
            Setnextjs("hide");
            Setdisplaygoback("freezeshow")
            setTimeout(() => {
                Setcss("freezehide")
                Sethtml("freezehide")
                Setreact("freezehide")
                Setnextjs("freezehide");
                Setdisplayddjs("show")
                Setdisplayjsline("freezehide")
                setTimeout(() => {
                    Setdisplayddjs("freezeshow")
                }, 300);
            }, 300);
            count ++;
    }
    }
    function handlenextjs(){
        count ++;
        console.log(count)
        if(count === 1){
            Setcss("hide")
            Sethtml("hide")
            Setreact("hide")
            Setjs("hide");
            Setdisplaygoback("freezeshow")
            setTimeout(() => {
                Setcss("freezehide")
                Sethtml("freezehide")
                Setreact("freezehide")
                Setjs("freezehide");
                Setdisplayddnextjs("show")
                Setdisplaynextjsline("freezehide")
                setTimeout(() => {
                    Setdisplayddnextjs("freezeshow")
                }, 300);
            }, 300);
            count ++;
    }
    }
    function handlecss(){
        count ++;
        console.log(count)
        if(count === 1){
            Setnextjs("hide")
            Sethtml("hide")
            Setreact("hide")
            Setjs("hide");
            Setdisplaygoback("freezeshow")
            setTimeout(() => {
                Setnextjs("freezehide")
                Sethtml("freezehide")
                Setreact("freezehide")
                Setjs("freezehide");
                Setdisplayddcss("show")
                Setdisplaycssline("freezehide")
                setTimeout(() => {
                    Setdisplayddcss("freezeshow")
                }, 300);
            }, 300);
            count ++;
    }
    }
    function handlereact(){
        count ++;
        console.log(count)
        if(count === 1){
            Setnextjs("hide")
            Sethtml("hide")
            Setcss("hide")
            Setjs("hide");
            Setdisplaygoback("freezeshow")
            setTimeout(() => {
                Setnextjs("freezehide")
                Sethtml("freezehide")
                Setcss("freezehide")
                Setjs("freezehide");
                Setdisplayddreact("show")
                Setdisplayreactline("freezehide")
                setTimeout(() => {
                    Setdisplayddreact("freezeshow")
                }, 300);
            }, 300);
            count ++;
    }
    }
    
    return(<>
    <div class="custom-shape-divider-top-1715326985">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <div className="journey-con">
        <div className="journey-upper-con" >
            <div className={`journey-goback-btn-con ${displaygoback}`} ><button onClick={handlegoback} className="journey-goback-btn">Go back</button></div>
            <div className="journey-title"><h1>My Code Journey</h1></div>
        </div>
        <br/>
        <div className="journey-body-con">
            <div className={`journey-top-con`}>
                    <div className={`journey-top-child ${html}`}>
                        <div className="journey-top-element">
                        <Image id="htmlpic" src={htmlpic} ></Image>
                            <div className="journey-top-text">
                                <button onClick={handlehtml} className="journey-title-btn" >HTML</button>
                                <h3 id="journey-h3-text" >November 2023</h3>
                            </div>
                        </div>
                         <div className={`journey-html-line ${displayhtmlline}`}></div>
                    </div>


                    <div className={`journey-top-child ${js}`}>
                        
                        <div className="journey-top-element">
                        <Image id="jspic" src={jspic} ></Image>
                            <div className="journey-top-text-js">
                                <button  onClick={handlejavascript} className="journey-title-btn" >javascript</button>
                                <h3 id="journey-h3-text" >December 2023</h3>
                            </div>
                        </div>
                         <div className={`journey-js-line ${displayjsline}`}></div>
                    </div>


                    <div className={`journey-top-child ${nextjs}`}>
                        <div className="journey-top-element">
                        <Image id="nextjspic" src={nextjspic} ></Image>
                        <div className="journey-top-text-next">
                            <button onClick={handlenextjs} className="journey-title-btn" >Next Js</button>
                            <h3 id="journey-h3-text" >April 2024</h3>
                        </div>
                        </div>
                         <div className={`journey-nextjs-line ${displaynextjsline}`}></div>
                    </div>

                <div className={`journey-html-dd-con ${displayddcss}`}>
                    <h3 className="journey-html-h3-dd" >
                    After HTML  we also can't forget about CSS which is our most
                     important tool in Front-End field. It took me about a month
                      to finish CSS and I did a lot of CSS projects after I finished
                       learning it. In CSS I love to play with animation to make my
                        website more attractive and improve user experience.</h3>
                </div>

                <div className={`journey-html-dd-con ${displayddreact}`}>
                    <h3 className="journey-html-h3-dd" >
                    After a while, HTML, CSS, and Javascript aren't enough to make my
                     website look good, which makes the React app my next target.
                      React doesn't just give me tools to use but it also allows me
                       to learn about how git works and especially publish my first
                        website without domain. I also can create any animation that
                         I want with React app and also make routing more easier</h3>
                </div>


            </div>
            <div className={`journey-middle-con `} >
                <h3 id="journey-h3-middle-text1" >2023</h3>
                <div className={`journey-middle-line`}></div>
                <h3 id="journey-h3-middle-text2" >2024</h3>
            </div>
            <div className="journey-bottom-con">
                    <div className={`journey-top-child ${css}`}>
                    <div className="journey-css-line-con" ><div className={`journey-css-line ${displaycssline}`}></div></div>
                        <div className="journey-top-element">
                        <Image id="htmlpic" src={csspic} ></Image>
                            <div className="journey-top-text">
                                <button onClick={handlecss} className="journey-title-btn" >CSS</button>
                                <h3 id="journey-h3-text" >Since November 2023</h3>
                            </div>
                        </div>
                    </div>


                    <div className={`journey-top-child ${react}`}>
                    <div className="journey-css-line-con" ><div className={`journey-css-line ${displayreactline}`}></div></div>
                        <div className="journey-top-element">
                        <Image id="htmlpic" src={reactpic} ></Image>
                            <div className="journey-top-text">
                                <button onClick={handlereact} className="journey-title-btn" >React Js</button>
                                <h3 id="journey-h3-text" >Since February 2024</h3>
                            </div>
                        </div>
                    </div>
                <div className={`journey-html-dd-con ${displayddhtml}`}>
                    <h3 className="journey-html-h3-dd" >
                        I have been dreaming about coding since I was in 
                        grade 10 but I don't have enough time to make it 
                        happen. but my journey started after I finished 
                        Bacll and I started putting my hand on my keyboard 
                        and doing what I love. The first tool that I learned
                         is HTML, which comes in handy for front-end developers.</h3>
                </div>
                <div className={`journey-html-dd-con ${displayddjs}`}>
                    <h3 className="journey-html-h3-dd" >
                    After HTML and CSS, Javascript is my next target. Learning 
                    Javascript is not a challenge for me because I used to learn
                     Python before which makes Javascript easier to understand.
                      The purpose of learning Javascript is for the used to create
                       functionality or systems to make my web page attractive and
                        perform the given job. which lead me to study all feature,
                         API fetching, and logic with function</h3>
                </div>
                <div className={`journey-html-dd-con ${displayddnextjs}`}>
                    <h3 className="journey-html-h3-dd" >
                    After a lot of wonderful projects had been created but after
                     a while, I felt like I didn't have enough tools for my website.
                      which made Next js was my next target. After learning Next js
                       for a while I found out that Next js has everything I have been
                        looking for such as loading.js, error.js, and some route features
                         such as dynamic routes, layout for each page and especially 
                         parallel routes, intercepting route which make my website professional.</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="custom-shape-divider-bottom-1715326985">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
    <br/>
    <br/>
    <br/>
    </>)
}