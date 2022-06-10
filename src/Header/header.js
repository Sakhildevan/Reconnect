import React from 'react'
import './header.css'
import Button from '@mui/material/Button'
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
                    <div><Button variant="text">About Us</Button></div>
                    <div><Button variant="text">Alumini</Button></div>
                    <div><Button variant="text">Contact Us</Button></div>
                    <div><Button variant="text">Login</Button></div>
                    <div><Button variant="text">Sign Up</Button></div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header 