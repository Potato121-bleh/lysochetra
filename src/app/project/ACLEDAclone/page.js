'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import your icons
import { faCode, faChevronRight, faChevronCircleLeft,
   faPercent, faBullhorn, faClock, faVault, faMoneyBill,
    faLocationCrosshairs, faChevronCircleRight, 
    faPercentage} from '@fortawesome/free-solid-svg-icons';
//import {arrowright} from '@fortawesome/fas-solid-fas-chevron-right'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import './acleda.css';
import acledalogo from './../../picture/ACLEDApic/acleda-logo.png';
import cambodiaflag from './../../picture/ACLEDApic/cambodia flag.png';
import kilozin from './../../picture/traprofile.png'
//flag
import usaflag from "./../../picture/ACLEDApic/flag of usa.jpg";
import canadaflag from "./../../picture/ACLEDApic/canada flag.png";
import europeflag from "./../../picture/ACLEDApic/Europe flag.png";
import firstad from "./../../picture/ACLEDApic/ad for pc3.png";
import secondad from "./../../picture/ACLEDApic/ad for pc2.png";
import thirdad from "./../../picture/ACLEDApic/ad for pc1.png";
//news
import new1 from "./../../picture/ACLEDApic/new1.png";
import new2 from "./../../picture/ACLEDApic/new2.png";
import new3 from "./../../picture/ACLEDApic/new3.png";
import new4 from "./../../picture/ACLEDApic/new4.png";
import new5 from "./../../picture/ACLEDApic/new5.png";
import new6 from "./../../picture/ACLEDApic/new6.png";
import new7 from "./../../picture/ACLEDApic/new7.png";
import new8 from "./../../picture/ACLEDApic/new8.png";
import new9 from "./../../picture/ACLEDApic/new9.png";
import new10 from "./../../picture/ACLEDApic/new10.png";
import new11 from "./../../picture/ACLEDApic/new11.png";

let displayad1 = "show";
let displayad2 = "";
let displayad3 = "";
let adcount = 1;
let circlecheck1 = "fa-regular fa-circle";
let circlecheck2 = "fa-regular fa-circle";
let circlecheck3 = "fa-regular fa-circle";
function App() {
  //For exchangerate property
  let start = false;
  let count = 0;
  let controlcal = 0;
  let useloops = useRef(null);
  let addclass = useRef("");
  let [addanimation, Setaddanimation] = useState();
  let [animationforad, Setanimationforad] = useState();
  //setTimeout(() => {
  //start = true;
  //}, 500);

  //useEffect(() => {
    //useloops.current = setInterval(() => {
      //count++;
      //controlcal++;
      //if (count == 3) {
        //Setaddanimation(" side-exchangerate-upperX2");
        //console.log(addclass.current);
        //setTimeout(() => {
         /// count = 0;
         // controlcal = 0;
        //  let readytouse = controlcal * 40;
         // let formatednum = `${readytouse}px`;
        //  exchangevalue.style.bottom = formatednum;
        ///}, 1000);
     // } else if (count == 2) {
       // Setaddanimation(" side-exchangerate-upper");
       // console.log(addclass.current);
       /// setTimeout(() => {
        //  let readytouse = controlcal * 40;
         // let formatednum = `${readytouse}px`;
         // exchangevalue.style.bottom = formatednum;
        //}, 1000);
        //addclass.current = " ";
     // } else {
        //Setaddanimation(" side-exchangerate-up");
        //console.log(addclass.current);
        //setTimeout(() => {
          //let readytouse = controlcal * 40;
          //let formatednum = `${readytouse}px`;
          //exchangevalue.style.bottom = formatednum;
        //}, 1000);
        //addclass.current = " ";
      //}
    //}, 3000);
    //return () => {
     // clearInterval(useloops.current);
   // };
 // }, []);

  //Ad Section
  let [displayad1, Setdisplayad1] = useState();
  let [displayad2, Setdisplayad2] = useState();
  let [displayad3, Setdisplayad3] = useState();
  function leftbtn() {
    adcount--;
    console.log(adcount);
    if (adcount === 0) {
      Setdisplayad3("show");
      adcount = 3;
      Setdisplayad1("hide");
      Setdisplayad2("hide");
      circlecheck1 = "fa-regular fa-circle";
      circlecheck2 = "fa-regular fa-circle";
      circlecheck3 = "fa-solid fa-circle";
    } else if (adcount === 2) {
      Setdisplayad2("show");
      Setdisplayad1("hide");
      Setdisplayad3("hide");
      circlecheck1 = "fa-regular fa-circle";
      circlecheck2 = "fa-solid fa-circle";
      circlecheck3 = "fa-regular fa-circle";
    } else if (adcount === 1) {
      Setdisplayad1("show");
      Setdisplayad3("hide");
      Setdisplayad2("hide");
      circlecheck1 = "fa-solid fa-circle";
      circlecheck2 = "fa-regular fa-circle";
      circlecheck3 = "fa-regular fa-circle";
    }
  }
  function rightbtn() {
    adcount++;
    if (adcount === 2) {
      Setdisplayad2("show");
      Setdisplayad1("hide");;
      Setdisplayad3("hide");;
      circlecheck1 = "fa-regular fa-circle";
      circlecheck2 = "fa-solid fa-circle";
      circlecheck3 = "fa-regular fa-circle";
    } else if (adcount === 3) {
      Setdisplayad3("show");
      Setdisplayad1("hide");;
      Setdisplayad2("hide");;
      circlecheck1 = "fa-regular fa-circle";
      circlecheck2 = "fa-regular fa-circle";
      circlecheck3 = "fa-solid fa-circle";
    } else if (adcount === 4) {
      Setdisplayad1("show");
      adcount = 1;
      Setdisplayad2("hide");;
      Setdisplayad3("hide");;
      circlecheck1 = "fa-solid fa-circle";
      circlecheck2 = "fa-regular fa-circle";
      circlecheck3 = "fa-regular fa-circle";
    }
  }
  function circle1st() {
    adcount = 1;
    displayad1 = "show";
    displayad2 = "";
    displayad3 = "";
    circlecheck1 = "fa-solid fa-circle";
    circlecheck2 = "fa-regular fa-circle";
    circlecheck3 = "fa-regular fa-circle";
  }
  function circle2sec() {
    adcount = 2;
    displayad2 = "show";
    displayad1 = "";
    displayad3 = "";
    circlecheck1 = "fa-regular fa-circle";
    circlecheck2 = "fa-solid fa-circle";
    circlecheck3 = "fa-regular fa-circle";
  }
  function circle3rd() {
    adcount = 3;
    displayad3 = "show";
    displayad2 = "";
    displayad1 = "";
    circlecheck1 = "fa-regular fa-circle";
    circlecheck2 = "fa-regular fa-circle";
    circlecheck3 = "fa-solid fa-circle";
  }
  return (
    <>
      <header>
      
        {/* THIS IS AD SECTION */}
        <div className="header-space">
          <p>.</p>
        </div>
        <div className="ad-con">
          <div className={`ad-child1 ${displayad1}`}>
            <Image className="ad-img-weird" src={firstad} />
          </div>
          <div className={`ad-child ${displayad2}`}>
            <Image className="ad-img" src={secondad} />
          </div>
          <div className={`ad-child ${displayad3} `}>
            <Image className="ad-img" src={thirdad} />
          </div>
          
          <FontAwesomeIcon icon={faChevronCircleLeft} onClick={leftbtn}
            id="btn-left-ad" ></FontAwesomeIcon>
          
          <FontAwesomeIcon icon={faChevronCircleRight} onClick={rightbtn}
            id="btn-right-ad" ></FontAwesomeIcon>
          {/*<div className="circle-btn">
            
            <FontAwesomeIcon onClick={circle1st}
              id="circle1"
               className={`circle-child`}
                icon={{circlecheck1}} ></FontAwesomeIcon>
            
            <FontAwesomeIcon onClick={circle2sec}
              id="circle2"
               className={`circle-child`}
                icon={{circlecheck2}} ></FontAwesomeIcon>
            
            <FontAwesomeIcon onClick={circle3rd}
              id="circle3"
               classname={`circle-child`}
                icon={"fa-circle"} ></FontAwesomeIcon>
          </div>*/}
        </div>

        {/* END */}
        <div className="header-upper-con">
          {/* This section is go-back btn  */}
        <div className='goback-link-ac' > 
        <Link className='goback-link-child-ac' href="/project" >Go Back</Link>
    </div>
          <div className="ac-logo-con">
          <Image id="ac-logo" src={acledalogo} />
          </div>
          <div className="nav-con">
            <li className="child-nav">ABOUT ACLEDA</li>
            <li className="child-nav">SEARCH</li>
            <li className="child-nav">INTERNET BANKING</li>
            <Image id="cam-flag" src={cambodiaflag} />
          </div>
        </div>
        <br></br>

        <div className="main-option-con">
          <div className="option-con">
            {/* THIS IS PERSONAL SECTION */}
            <div className="option-child">
              <li id="personal-option">PERSONAL</li>
              {/* This is more option under the main option "Option bar"*/}
              {/* For Personal option bar*/}
              <div className="option-bar-cover">
                <div className="option-bar-personal">
                  <li className="option-bar-child">Credit</li>
                  <li className="option-bar-child">Deposits</li>
                  <li className="option-bar-child">Cash Management</li>
                  <li className="option-bar-child">Funds transfers</li>
                  <li className="option-bar-child">Trade Finance</li>
                  <li className="option-bar-child">
                    Securities & Trust Services
                  </li>
                  <li className="option-bar-child">
                    Corporate Agent Life Insurance <br /> Service
                  </li>
                  <li className="option-bar-child">Financial Health Check</li>
                </div>
              </div>
            </div>

            {/* THIS IS BUSINESS SECTION */}

            <div className="option-child">
              <li>BUSINESS</li>
              {/* This is more option under the main option "Option bar"*/}
              {/* For Personal option bar*/}
              <div className="option-bar-cover">
                <div className="option-bar-business">
                  <li className="option-bar-child">Credit</li>
                  <li className="option-bar-child">Deposits</li>
                  <li className="option-bar-child">Cash Management</li>
                  <li className="option-bar-child">Funds transfers</li>
                  <li className="option-bar-child">Trade Finance</li>
                  <li className="option-bar-child">
                    Securities & Trust Services
                  </li>
                  <li className="option-bar-child">Financial Health Check</li>
                </div>
              </div>
            </div>

            {/* THIS IS CARDS SECTION */}
            <div className="option-child">
              <li>CARDS</li>
              <div className="option-bar-cover">
                <div className="option-bar-cards">
                  <li className="option-bar-child">Consumer Card</li>
                  <li className="option-bar-child">ACLEDA Card</li>
                  <li className="option-bar-child">VISA Debit/Credit Card</li>
                  <li className="option-bar-child">
                    Mastercard Debit/Credit Card
                  </li>
                  <li className="option-bar-child">
                    Mastercard Lady Debit/Credit <br /> Card
                  </li>
                  <li className="option-bar-child">JCB Debit Card</li>
                  <li className="option-bar-child">UPI Debit Card</li>
                </div>
              </div>
            </div>

            {/* THIS IS DIGITAL SECTION */}

            <div className="option-child">
              <li>DIGITAL</li>
              <div className="option-child-cover">
                <div className="option-bar-cards">
                  <li className="option-bar-child">ACLEDA Internet Banking</li>
                  <li className="option-bar-child">ACLEDA mobile</li>
                  <li className="option-bar-child">ACLEDA E-Commerce</li>
                  <li className="option-bar-child">ACLEDA ATM</li>
                  <li className="option-bar-child">ACLEDA POS</li>
                  <li className="option-bar-child">Term Deposit Machine</li>
                  <li className="option-bar-child">Virtual Teller Machine</li>
                  <li className="option-bar-child">PayBand</li>
                </div>
              </div>
            </div>

            <li className="option-child">INVESTOR RELATIONS</li>
          </div>

          <div className="sec-container">
            <div className="sec1-con" id="exchange">
              <p>EXCHANGE RATE</p>
            </div>
            <div id="sec2-con" className={addanimation}>
              <Image className="flag" src={canadaflag} />
              <p className="inlineblock">CAD</p>
              <p className="inlineblock">2,503.00 3.082.27</p>
              <br />
              
              {/*<Image className="flag" src={usaflag} />
              <p className="inlineblock">USA</p>
              <p className="inlineblock">4,062 4,076</p>
              <br />
              <Image className="flag" src={europeflag} />
              <p className="inlineblock">EUR</p>
              <p className="inlineblock">4,270.38 4,529.66</p>
              <br />
              <Image className="flag" src={canadaflag} />
              <p className="inlineblock">CAD</p>
  <p className="inlineblock">2,503.00 3.082.27</p>*/}

            </div>
          </div>
        </div>
      </header>

      <div className="main-offer-bar">
        <div className="offer-bar">
          <li className="offer-bar-child">
          <FontAwesomeIcon className="icon-child" size="2x" icon={faPercent}></FontAwesomeIcon>
            <p className="dd-for-offer">SPECIAL OFFER</p>
          </li>
          <li className="offer-bar-child">
          <FontAwesomeIcon className="icon-child" size="2x" icon={faBullhorn}></FontAwesomeIcon>
            <p className="dd-for-offer">LATEST NEWS</p>
          </li>
          <li id="offer-bar3" className="offer-bar-child">
          <FontAwesomeIcon className="icon-child" size="2x" icon={faClock}></FontAwesomeIcon>
            <p className="dd-for-offer">PRODUCTS UPDATES</p>
          </li>
          <li className="offer-bar-child">
          <FontAwesomeIcon className="icon-child" size="2x" icon={faVault}></FontAwesomeIcon>
            <p className="dd-for-offer">DEPOSIT</p>
          </li>
          <li className="offer-bar-child">
          <FontAwesomeIcon className="icon-child" size="2x" icon={faMoneyBill}></FontAwesomeIcon>
            <p className="dd-for-offer">CREDIT</p>
          </li>
          <li className="offer-bar-child">
          <FontAwesomeIcon className="icon-child" size="2x" icon={faLocationCrosshairs}></FontAwesomeIcon>
            <p className="dd-for-offer">LOCATION</p>
          </li>
        </div>
      </div>

      <div className="news-main-container">
        <div className="news-parent">
          <li className="news-child">
            <Image className="acleda-img" src={new1} />
            <p>
              "WeChat Pay" Adopted by Cambodia's Leading Bank, ACLEDA Bank, as
              Overseas QR Code Payment Service
            </p>
          </li>
          <li className="news-child">
            <Image className="acleda-img" src={new2} />
            <p>
              The Royal Government of Cambodia recognizes the transformation of
              ACLEDA 
              Institute of Business to ACLEDA University of Business
            </p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new3} />
            <p>Read More</p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new4} />
            <p>Read More</p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new5} />
            <p>Read More</p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new6} />
            <p>Read More</p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new7} />
            <p>Read More</p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new8} />
            <p>Read More</p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new9} />
            <p>Read More</p>
          </li>
          <li className="news-child">
            <Image className="acleda-img-long" src={new10} />
            <p>Read More</p>
          </li>
          <li className="news-child-weird">
            <Image className="acleda-img-long" src={new11} />
            <p>Read More</p>
          </li>
        </div>
      </div>
    </>
  );
}

export default App;
