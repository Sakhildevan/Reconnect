import React from 'react'
import './header.css'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
function Header() {
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
                    <div><Button variant="text"><Link to={'/alumini'} className='hdbtn'>Alumini</Link></Button></div>
                    <div><Button variant="text"><Link to={'/aboutus'} className='hdbtn'>About Us</Link></Button></div>
                    <div><Button variant="text"><Link to={'/contactus'} className='hdbtn'>Contact Us</Link></Button></div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header 