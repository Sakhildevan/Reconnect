import React from 'react'
import './home.css'
import himg1 from '../assets/png.png'
import Button from '@mui/material/Button'
function Home() {
  return (
    <>
        <div className='home-main-div'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="#ffffff" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,229.3C384,256,480,256,576,240C672,224,768,192,864,154.7C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className='home-main-div-flex'>
                <div className='home-main-div-flex-text'>
                    <div className='home-main-div-flex-text-inner'>
                        <h1>Reconnect with your memories</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iure, maiores, aspernatur nostrum vero itaque, ab libero in sint commodi repellat explicabo officia! Esse ea velit iure recusandae, quasi commodi!</p>
                        <Button variant="outlined">Register</Button>
                    </div>
                </div>
                <div className='home-main-div-flex-image'>
                    <img src={himg1} alt="group-of-people" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home