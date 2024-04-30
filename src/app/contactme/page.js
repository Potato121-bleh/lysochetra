'use client'
import './contactme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';


export default function contactme(){
    return(<>
    <div className="contact-1st-con" >
        <div className='contact-h1-con'>
            <h1 className='contact-h1'>Contact Me</h1>
        </div>
        <div className="contact-2nd-con" >
            <div className="contact-left-section">
                
                <div className='contact-left-child' >
                    <FontAwesomeIcon className='contact-icon' icon={faLocationDot} size='3x' ></FontAwesomeIcon>
                    <h2 className='contact-text-h2' >ADDRESS</h2><br/>
                    <p className='contact-text' >St02, Chak Angre krom, Mean Chey,<br/> Phnom Penh</p>
                </div>
            
                <br/>
                <div className='contact-left-child' >
                    <FontAwesomeIcon className='contact-icon' icon={faPhone} size='3x' ></FontAwesomeIcon>
                    <h2 className='contact-text-h2' >PHONE</h2><br/>
                    <p className='contact-text' >+855 93 602 025</p>
                </div>
                <br/>
                <div className='contact-left-child' >
                    <FontAwesomeIcon className='contact-icon' icon={faTelegramPlane} size='3x' ></FontAwesomeIcon>
                    <h2 className='contact-text-h2' >TELEGRAM</h2><br/>
                    <p className='contact-text-unique' >Name:លី សុចិត្រា_Ly Sochetra <br/>
                        Phone Number: +855 93 602 025</p>
                </div>
                <br/>
                <div className='contact-left-child' >
                    <FontAwesomeIcon className='contact-icon' icon={faEnvelope} size='3x' ></FontAwesomeIcon>
                    <h2 className='contact-text-h2' >EMAIL</h2><br/>
                    <p className='contact-text' >lysochetra95@gmail.com</p>
                </div>
            </div>
            <div className='contact-middle-section' ></div>
            <div className="contact-right-section" >
                
                <p className='contact-p' >I'm sure you having a great time checking my website.
                just to let you know that right now, I'm also creating new project as well as learning python.
                The purpose of learning python is that, I could use it with MySQL and other database. Not only that,
                I also can use python to help me build my future goal because my dream beside website developer, 
                I also want to be an AI developer, which python will come to play an important role. just to let you
                know that I'm also looking for a front-end developer job as junior to earn more experience and use my skill 
                and everything I have to build something useful for company and also can be a chance for me to get to know 
                more how technology really influence to all company
                </p>
                
            </div>
        </div>
    </div>
    </>)
}