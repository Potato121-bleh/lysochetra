'use client'
import Link from 'next/link'
import './header.css'
import { usePathname } from 'next/navigation'
import { useState } from 'react';
export default function header(){
    let pathname = usePathname();
    let [changecolor1, Setchangecolor1] = useState();
    let [changecolor2, Setchangecolor2] = useState();
    let [changecolor3, Setchangecolor3] = useState();
    let [changecolor4, Setchangecolor4] = useState();

{/*    function handleclickproject(){
        Setchangecolor2("changecolor");
        Setchangecolor1("");
        Setchangecolor3("");
        Setchangecolor4("");
    }*/}

    {/*if(pathname === "/project"){
        Setchangecolor2("changecolor");
        Setchangecolor1("");
        Setchangecolor3("");
        Setchangecolor4("");
    }
    else if(pathname === "/achievement"){
        Setchangecolor3("changecolor");
        Setchangecolor1("");
        Setchangecolor2("");
        Setchangecolor4("");
    }
    else if(pathname === "/contactme"){
        Setchangecolor4("changecolor");
        Setchangecolor1("");
        Setchangecolor3("");
        Setchangecolor2("");
    }*/}
    return(<>
        <div className='header-main'>
            
            <ul className='header-ul' >
                <Link className={`header-link`} id='header-link-home' href='/' >Home</Link>
                <Link className={`header-link`} id='header-link-project' href='/project' >Project</Link>
                <Link className={`header-link`} id='header-link-achievement' href='/achievement' >Achievement</Link>
                <Link className={`header-link`} id='header-link-Contact-me' href='/contactme' >Contact Me</Link>
                
            </ul>
            {/*<div className='header-profile' ></div>*/}
        </div>
    </>)
}