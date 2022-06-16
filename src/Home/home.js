import React from 'react'
import './home.css'
import Button from '@mui/material/Button'
import Header from '../Header/header'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        <Header />
        <div className='home-main-div'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="0.8" d="M0,288L40,256C80,224,160,160,240,144C320,128,400,160,480,192C560,224,640,256,720,277.3C800,299,880,309,960,304C1040,299,1120,277,1200,266.7C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
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
                    <div className='login-form'>
                        <div className='login-heading'>
                            <h1>Member Login</h1>
                        </div>
                        <form action="">
                            <div className='frmldiv'>
                                <input type="text" name='username' id='username' placeholder=' Username'/>
                            </div>
                            <div className='frmldiv'>
                                <input type="password" name='password' id='lpaswrd' placeholder=' Password'/>
                            </div>
                            <div className='frmldiv'>
                                <Button variant="contained">Login</Button>
                            </div>
                            <div className='frmldiv-flex'>
                                <a href="https://www.google.com" className='llink'>Forget Password ?</a>
                                <Link to={'/event'} className='llink'>Don't have an account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home