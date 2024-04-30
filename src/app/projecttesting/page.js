'use client'

import './project.css'
import Link from 'next/link'
import { useState } from 'react';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faCode, faChevronRight, faHighlighter } from '@fortawesome/free-solid-svg-icons';
//import {arrowright} from '@fortawesome/fas-solid-fas-chevron-right'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let count = 0;

export default function project(){
    
    let countside = 0;
    let [rotate1, Setrotate1] = useState();
    let [rotate2, Setrotate2] = useState();
    let [rotate3, Setrotate3] = useState();
    let [rotate4, Setrotate4] = useState();
    let [freezerotate1, Setfreezerotate1] = useState();
    let [freezerotate2, Setfreezerotate2] = useState();
    let [freezerotate3, Setfreezerotate3] = useState();
    let [freezerotate4, Setfreezerotate4] = useState();
    let [padding1, Setpadding1] = useState();
    let [padding2, Setpadding2] = useState();
    let [padding3, Setpadding3] = useState();
    let [padding4, Setpadding4] = useState();
    let [freezepadding1, Setfreezepadding1] = useState();
    let [freezepadding2, Setfreezepadding2] = useState();
    let [freezepadding3, Setfreezepadding3] = useState();
    let [freezepadding4, Setfreezepadding4] = useState();
    let [displaytext1, Setdisplaytext1] = useState();
    let [displaytext2, Setdisplaytext2] = useState();
    let [displaytext3, Setdisplaytext3] = useState();
    let [displaytext4, Setdisplaytext4] = useState();
    
    function handleclick1(){
        count = count + 1;
        console.log(count)
        if(count % 2 == 0){
            console.log("sth happen here")
                Setrotate1("rotateZ90back");
                Setpadding1("paddingback")
                count = 0;
                setTimeout(() => {
                    Setfreezerotate1("freezerotate1back")
                    Setfreezepadding1("")
                    Setdisplaytext1("hide")
                }, 500);
        }
        else{
            Setfreezerotate1("")
            Setrotate1("rotateZ90");
            Setpadding1("padding")
            setTimeout(() => {
                Setfreezerotate1("freezerotate1")
                Setfreezepadding1("freezepadding")
                Setdisplaytext1("show")
            }, 500);
        }

    }
    function handleclick2(){
        
        count = count + 1;
        console.log(count)
        if(count % 2 == 0){
            console.log("sth happen here")
                Setrotate2("rotateZ90back");
                Setpadding2("paddingback");
                count = 0;
                setTimeout(() => {
                    Setfreezerotate2("freezerotate1back")
                    Setfreezepadding2("")
                    Setdisplaytext2("hide")
                }, 500);
        }
        else{
            Setfreezerotate2("")
            Setrotate2("rotateZ90");
            Setpadding2("padding")
            setTimeout(() => {
                Setfreezerotate2("freezerotate1")
                Setfreezepadding2("freezepadding")
                Setdisplaytext2("show")
            }, 500);
        }
    }
    function handleclick3(){
         
        count = count + 1;
        console.log(count)
        if(count % 2 == 0){
            console.log("sth happen here")
                Setrotate3("rotateZ90back");
                Setpadding3("paddingback");
                count = 0;
                setTimeout(() => {
                    Setfreezerotate3("freezerotate1back")
                    Setfreezepadding3("")
                    Setdisplaytext3("hide")
                }, 500);
        }
        else{
            Setfreezerotate3("")
            Setrotate3("rotateZ90");
            Setpadding3("padding")
            setTimeout(() => {
                Setfreezerotate3("freezerotate1")
                Setfreezepadding3("freezepadding")
                Setdisplaytext3("show")
            }, 500);
        }
    }

    function handleclick4(){
        count = count + 1;
        console.log(count)
        if(count % 2 == 0){
            console.log("sth happen here")
                Setrotate4("rotateZ90back");
                Setpadding4("paddingback");
                count = 0; 
                setTimeout(() => {
                    Setfreezerotate4("freezerotate1back")
                    Setfreezepadding4("")
                    Setdisplaytext4("hide")
                }, 500);
        }
        else{
            Setfreezerotate4("")
            Setrotate4("rotateZ90");
            Setpadding4("padding")
            setTimeout(() => {
                Setfreezerotate4("freezerotate1")
                Setfreezepadding4("freezepadding")
                Setdisplaytext4("show")
            }, 500);
        }
    }



    function mainhandleclick(count){
        if(count = 1){
            countside ++;
            console.log(countside)
            if(countside == 1){
                console.log("it went as plan")
            Setfreezerotate1("")
            Setrotate1("rotateZ90");
            setTimeout(() => {
                Setrotate1("");
                Setfreezerotate1("freezerotate1")
            }, 500);
            }
            else if(countside == 2){
                console.log("sth happen here")
                Setrotate1("rotateZ90back");
                setTimeout(() => {
                    Setrotate1("");
                    Setfreezerotate1("freezerotate1back")
                }, 500);
            }
        }
    }
    //function handleclick1(){
        //count = 1;
       //mainhandleclick(count);
       // count = 0;
    //}

    return(<>
    <div className="project-con" >
    
        <div className="project-ul"  >
                <div className={`project-link-con`} > 
            <FontAwesomeIcon onClick={handleclick1} className={`icon-child ${rotate1} ${freezerotate1}`} icon={faChevronRight} />
            <Link href='./project/storage/ACLEDAclone' className="project-li" >Clone ACLEDA website</Link>
                <div className={`dd-text ${displaytext1}`} ><p>sad asda asd asda wrgdf efer website asdasghghfem doefj</p></div>
                </div> 

                <div className={`project-link-con ${padding1} ${freezepadding1}`} >
            <FontAwesomeIcon onClick={handleclick2} className={`icon-child ${rotate2} ${freezerotate2}`} icon={faChevronRight} />
            <Link href='./project/storage/calculator' className="project-li" >calculate Binary number</Link>
            <div className={`dd-text ${displaytext2}`} ><p>sad asda asd asda wrgdf efer website asdasghghfem doefj</p></div>
                </div>

                <div className={`project-link-con ${padding2} ${freezepadding2}`} >
            <FontAwesomeIcon onClick={handleclick3} className={`icon-child ${rotate3} ${freezerotate3}`} icon={faChevronRight} />
            <Link href='./project/storage/pickgame' className="project-li" >Pick Game</Link>
            <div className={`dd-text ${displaytext3}`} ><p>sad asda asd asda wrgdf efer website asdasghghfem doefj</p></div>
                </div>

                <div className={`project-link-con ${padding3} ${freezepadding3}`} >
            <FontAwesomeIcon onClick={handleclick4} className={`icon-child ${rotate4} ${freezerotate4}`} icon={faChevronRight} />
            <Link href='./project/storage/pickgame' className="project-li" >Website Service</Link>
            <div className={`dd-text ${displaytext4}`} ><p>sad asda asd asda wrgdf efer website asdasghghfem doefj</p></div>
                </div>
                
                <div className={`project-hidden-block ${padding4} ${freezepadding4}`} ></div>
        </div>
    </div>
    </>)
}