'use client'

import {useState, useRef, useEffect} from 'react'

import './../serviceweb.css'




function secondslide(){
    
    let [freeze1, Setfreeze1] = useState();
    let [freeze2, Setfreeze2] = useState();
    let [freeze3, Setfreeze3] = useState();
    let [classcontrol, Setclasscontrol] = useState();
    let [controlbox1, Setcontrolbox1] = useState();
    let [controlbox2, Setcontrolbox2] = useState();
    let [controlbox3, Setcontrolbox3] = useState();
    let [section1, Setsection1] = useState();
    let [section2, Setsection2] = useState();
    let [section3, Setsection3] = useState();
    let firstbtn = document.getElementById("first-btn")

    function handleclick1(){
        Setclasscontrol('hidden')
        Setsection2("move-section1-aside");
        Setsection3("move-section1-up");
        setTimeout(() => {
            console.log("rendered")
            Setclasscontrol('hidden')
            Setfreeze2("freeze1-for-move-aside");
            Setfreeze3("freeze1-for-move-up")
            Setcontrolbox1("show")
        }, 1000);
    }
    function handleclick2(){
        Setclasscontrol('hidden')
        Setsection2("move-section2-aside");
        Setsection1("move-section2-down");
        setTimeout(() => {
            console.log("rendered")
            Setclasscontrol('hidden')
            Setfreeze2("freeze2-for-move-aside");
            Setfreeze1("freeze2-for-move-down");
            Setcontrolbox2("show")
        }, 1000);
    }
    function handleclick3(){
        Setclasscontrol('hidden')
        Setsection2("move-section3-aside");
        Setsection1("move-section3-up");
        setTimeout(() => {
            console.log("rendered")
            Setclasscontrol('hidden')
            Setfreeze2("freeze3-for-move-aside");
            Setfreeze1("freeze3-for-move-up");
            Setcontrolbox3("show")
        }, 1000);
    }
    function handleback(){  
        Setclasscontrol('hidden')
        Setsection2("move-section-bouns-back");
        Setsection3("move-section-bouns-back");
        Setsection1("move-section-bouns-back")
        Setcontrolbox1("hidden")
        Setcontrolbox2("hidden")
        Setcontrolbox3("hidden")
        setTimeout(() => {
            console.log("rendered")
            Setclasscontrol('show')
            Setfreeze2("freeze-for-move-bouns-back");
            Setfreeze3("freeze-for-move-bouns-back")
            Setfreeze1("freeze-for-move-bouns-back")
        }, 1000);
    }
    

    return(<>
        <section className="secondslide">
            <h1 id='sec-title' >What can we do for you?</h1>
            <div className='con-of-3' >
                {/* THIS IS BOX 1 */}
                <div id='section-build' className={`section-child-2 ${section1} ${freeze1}`} >
                    <p className={classcontrol} >Click here for more detail</p>
                    <i id='point-hand-icon' className={`fa-solid fa-hand-point-down ${classcontrol}`}></i>
                    <br/>
                    <br/>
                    <button onClick={handleclick1} id='first-btn' className='section-btn' >Build Your Own <br/>Website</button>
                </div>
                {/* THIS IS BOX 2 */}
                <div id='section-maintenance' className={`section-child-2 ${section2} ${freeze2}`} >
                    <p className={classcontrol} >Click here for more detail</p>
                    <i id='point-hand-icon' className={`fa-solid fa-hand-point-down ${classcontrol}`}></i>
                    <br/>
                    <br/>
                    <button onClick={handleclick2} id='sec-btn' className='section-btn' >Maintenance</button>
                </div>
                {/* THIS IS BOX 3 */}
                <div id='section-design-desire' className={`section-child-2 ${section3} ${freeze3}`} >
                    <p className={classcontrol} >Click here for more detail</p>
                    <i id='point-hand-icon' className={`fa-solid fa-hand-point-down ${classcontrol}`}></i>
                    <br/>
                    <br/>
                    <button onClick={handleclick3} id='third-btn' className='section-btn' >Design with your <br/> desire</button>
                </div>
            </div>
            <div className={`detail-of-section1 ${controlbox1}`} ><p>We will build your website with a variety of categories that fit your need such as E-commerce website, School website and Personal website</p></div>
            <div className={`detail-of-section2 ${controlbox2}`} ><p>Every Website need developer to keep it online and keep everything in place which is why we also provid a service that allow us to take care of your website and help you to publish new product and infomation</p></div>
            <div className={`detail-of-section3 ${controlbox3}`} ><p>By create your website with us, you can design your web page to any design you want with free of charge and we'll giving feedback to your decision to create your website more advance and elegant</p></div>
            <div className='back-arrow' >
            <i onClick={handleback} class={`fa-solid fa-arrow-left fa-2x ${controlbox1} ${controlbox2} ${controlbox3} `}></i>
            </div>
            <p id='web-credit' >www.visualdevgroup.com</p>
        </section>
    </>)
}

export default secondslide;