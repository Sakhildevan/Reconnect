import React from 'react'
import './home.css'
import Button from '@mui/material/Button'
import Header from '../Header/header'
import { Link } from "react-router-dom";
import Footer from '../Footer/footer';
import Grid from '@mui/material/Grid';
import himg1 from '../assets/thumb-1920-932313.jpg'
import CountUp from 'react-countup';
import useCountUp from 'react-countup';
function Home() {
    
  return (
    <>
        <Header />
        <div className='home-main-div'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,288L40,256C80,224,160,160,240,144C320,128,400,160,480,192C560,224,640,256,720,277.3C800,299,880,309,960,304C1040,299,1120,277,1200,266.7C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
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
                    <div className='login-form uk-animation-fade'>
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
                                <Link to={'/signup'} className='llink'>Don't have an account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-section1'>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={6} className='hjkl'>
                    <div className='home-sec-img-div'>
                        <img src={himg1} alt="jkl" />
                    </div>
                </Grid>
                <Grid item xs={6} md={6} >
                    <div className='home-sec-text-div'>
                        <h1>Amrita University</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cupiditate atque aperiam aliquid animi quibusdam doloremque in ullam cum. Non iusto totam illum dolor sequi ex accusantium sint esse! Odit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae maxime quos, error repudiandae non facere provident minus quia labore nisi, eveniet dolores voluptatum neque quidem soluta fuga aliquid odio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis provident soluta, quibusdam quia inventore iste beatae, non unde exercitationem obcaecati optio esse vitae distinctio! Sequi dolor modi architecto quos.</p>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className='home-section2'>
            <div className='home-section2-main-flex'>
                <div>
                    <h1>
                        <CountUp end={200} />
                    </h1>
                </div>
                <div>
                    <h1>
                        <CountUp end={200} />
                    </h1> 
                </div>
                <div>
                    <h1>
                        <CountUp end={200} />
                    </h1> 
                </div>
                <div>
                    <h1>
                        <CountUp end={200} />
                    </h1> 
                </div>
                <div>
                    <CountUp
                          start={-875.039}
                          end={160527.012}                        
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                                <button onWheel={start}>Start</button>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Home