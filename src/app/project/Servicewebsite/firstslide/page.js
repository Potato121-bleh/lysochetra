'use client'

import './../serviceweb.css'

function firstslide(){
    return(<>
    <div className="main-first-slide" >
        <div className='text-cover' >
             <p>Welcome to</p>
            <h1>Visual Developer<br/>Group</h1>
            <p>We are a developer team and ready to build your business <br/> 
            with our amazing website and have everything that you need</p>
        </div>
        <br/>
        <div className='btn-con'>
            <button id='explore-btn' >Explore here</button>
        </div>
    </div>
    </>)
}

export default firstslide;