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
                    <div><Button variant="text"><Link to={'/aboutus'}>About Us</Link></Button></div>
                    <div><Button variant="text">Alumini</Button></div>
                    <div><Button variant="text"><Link to={'/event'}>Events</Link></Button></div>
                    <div><Button variant="text"><Link to={'/contactus'}>Contact Us</Link></Button></div>
                    <div><Button variant="text"><Link to={'/login'}>Logi In</Link></Button></div>
                    <div><Button variant="text"><Link to={'/signup'}>Sign Up</Link></Button></div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header 