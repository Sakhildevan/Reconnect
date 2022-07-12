import React from 'react'
import './header.css'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import himg1 from '../assets/bars-solid.svg';
import { useState } from 'react';
function Header() {
const [showNav,setshowNav]=useState(false);
  return (
    <>
        <nav className='main-nav'>
            <div className='margin-div'>
                <div className='main-logo-div'>
                    <div>
                        <h1>Reconnect</h1>
                    </div>
                </div>
                <div className='main-menus'>
                    <div><Button variant="text"><Link to={'/alumini'} className='hdbtn'>Alumni</Link></Button></div>
                    <div><Button variant="text"><Link to={'/aboutus'} className='hdbtn'>About Us</Link></Button></div>
                    <div><Button variant="text"><Link to={'/contactus'} className='hdbtn'>Contact Us</Link></Button></div>
                </div>
                <div className='empty-header-div'></div>
                <Button variant="text"><div className='guhh' onClick={()=>{setshowNav(!showNav)}}>
                    <img src={himg1} alt="" />
                </div></Button>
            </div>
            {showNav?<div className='Mobile-menu'>
                    <div className='hed-btn-div'>
                        <Button variant="text">Home</Button>
                    </div>
                    <div className='hed-btn-div'>
                        <Button variant="text">Home</Button>
                    </div>
                    <div className='hed-btn-div'>
                        <Button variant="text">Home</Button>                
                    </div>
            </div>:null}
        </nav>
    </>
  )
}

export default Header 