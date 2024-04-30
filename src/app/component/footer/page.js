'use client'

import './footer.css';
import {
    TelegramShareButton,
    TelegramIcon,
  } from 'next-share'
  import {
    FacebookShareButton,
    FacebookIcon,
  } from 'next-share'
import Link from 'next/link';

export default function footer() {
    return(<>
    
        <div className="footer-main" >
            <div className="footer-left-section" >
                
                <ul className="footer-project-section" >
                    <Link id='project-title' href='/project'>Project</Link>
                    <li className='footer-child-list' ><Link className='footer-remove-style' href='/project/ACLEDAclone'>ACLEDA Clone website</Link></li>
                    <li className='footer-child-list' ><Link className='footer-remove-style' href='/project/Calculator'>Calculate Binary</Link></li>
                    <li className='footer-child-list footer-child-last'>{`(Coming Soon)`}</li>
                </ul>
                <ul className='footer-achievement-section'>
                    <li id='achievement-title'>Achievement</li>
                    <li className='footer-child-list'>Aii Language Center</li>
                    <li className='footer-child-list'>Southeast Asia language</li>
                    <li className='footer-child-list footer-child-last'>Chak Angre High School</li>
                </ul>
            </div>
            {/*<div className='footer-right-section'>
                <label id='title-comment'>Email me:</label><br/><br/>
                <textarea type='comment' id='comment-box' placeholder='Type your comment here'></textarea>
                <button id='footer-button'>Submit</button>
    </div>*/}
            <div className='footer-hardright-section'>
            <FacebookIcon className='footer-icon' size={60} round />
            <TelegramIcon className='footer-icon' size={60} round />
            </div>
            <div className='hide-space'></div>
        </div>
    </>)
}