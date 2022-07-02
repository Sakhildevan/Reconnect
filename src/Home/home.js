import React from 'react'
import './home.css'
import Button from '@mui/material/Button'
import Header from '../Header/header'
import { Link } from "react-router-dom";
import Footer from '../Footer/footer';
import Grid from '@mui/material/Grid';
import himg1 from '../assets/thumb-1920-932313.jpg'
import CountUp from 'react-countup';
import himg2 from '../assets/user-regular.svg'
import himg3 from '../assets/graduation-cap-solid.svg'
import himg4 from '../assets/chalkboard-user-solid.svg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import { useCountUp } from 'react-countup';
import himg5 from '../assets/download (1).jpg'
import himg6 from '../assets/download (2).jpg'
import himg7 from '../assets/download (3).jpg'
import himg8 from '../assets/download (4).jpg'
import himg9 from '../assets/download.jpg'
import himg10 from '../assets/download.jpg'
import himg11 from '../assets/images (1).jpg'
import himg12 from '../assets/images (2).jpg'
import himg13 from '../assets/images.jpg'

function Home() {
const itemData = [
    himg5,himg6,himg7,himg8,himg9,himg10,himg11,himg12,himg13
  ];
    
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
                <div className='counter-div'>
                    <img src={himg2} alt="" />
                    <h1>
                        <CountUp
                            start={0}
                            end={2000}
                            suffix="+"
                            duration={8}                        
                        >
                            {({ countUpRef, start }) => (
                                <div onLoad={start}>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <h3>Students</h3>
                    </h1>
                </div>
                <div className='counter-div'>
                    <img src={himg3} alt="" />
                    <h1>
                        <CountUp
                            start={0}
                            end={1500}
                            suffix="+"
                            duration={8}                        
                        >
                            {({ countUpRef, start }) => (
                                <div >
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <h3>Alumini</h3> 
                    </h1>
                </div>
                <div className='counter-div'>
                    <img src={himg4} alt="" />
                    <h1>
                        <CountUp
                        start={0}
                        end={1000}
                        suffix="+"
                        duration={8}                        
                        >
                        {({ countUpRef, start }) => (
                            <div onLoad={start}>
                                <span ref={countUpRef} />
                            </div>
                        )}
                        </CountUp>
                        <h3>Faculty</h3>
                    </h1> 
                </div>
            </div>
        </div>
        <div className='home-section-3'>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img
                src={item} 
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
        </div>
        <Footer />
    </>
  )
}

export default Home