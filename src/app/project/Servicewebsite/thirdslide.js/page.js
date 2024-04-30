'use client'

import './../serviceweb.css'
import Traprofile from './../../../picture/ServiceWeb/profile fb.jpg'
function thirdslide(){


return(<>
    <section className='thirdslide-con' >
        <h1 className='third-title'>Visual Developer Group</h1>
        <div className='thirdslide-content' >
            <li className='child-box'>
                <img id='Trapf-img' src={Traprofile} />
                <p>Ly Sochetra</p>
            </li>
        </div>
        <div className='footer-of-home'>
            <p id='footer-text' >Contact Us: <br/> Visualdevgroup@gmail.com</p>
            <div className='icon-con' >
            <i class="fa-brands fa-facebook fa-2x icon-item"></i>
            <i class="fa-brands fa-instagram fa-2x icon-item"></i>
            <i class="fa-brands fa-telegram fa-2x icon-item"></i>
            </div>
        </div>
    </section>
    </>)
}

export default thirdslide;