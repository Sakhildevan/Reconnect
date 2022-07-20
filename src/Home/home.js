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
import himg5 from '../assets/download (1).jpg'
import himg6 from '../assets/download (2).jpg'
import himg7 from '../assets/download (3).jpg'
import himg8 from '../assets/download (4).jpg'
import himg9 from '../assets/download.jpg'
import himg10 from '../assets/download.jpg'
import himg11 from '../assets/images (1).jpg'
import himg12 from '../assets/images (2).jpg'
import himg13 from '../assets/images.jpg'
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
const [showImg1,setShowImg1]=useState(true);
const [showImg2,setShowImg2]=useState(false);
const [showImg3,setShowImg3]=useState(false);
const [showImg4,setShowImg4]=useState(false);
const [showImg5,setShowImg5]=useState(false);
const [showImg6,setShowImg6]=useState(false);
const [showImg7,setShowImg7]=useState(false);
const [showImg8,setShowImg8]=useState(false);
const [showImg9,setShowImg9]=useState(false);

  const [show,setShow]=useState(true)
  const controlNavbar=()=>{
      if(window.scrollY > 60){
          setShow(false)
          console.log('hello');
      }
      else{
          setShow(true)
      }
  }
  useEffect(()=>{
      window.addEventListener('scroll',controlNavbar)
      return()=>{
        window.removeEventListener('scroll',controlNavbar)
      }
  },[])
    
  return (
    <>
        {show?<Header />:null} 
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
                <Grid item xs={12} md={6} lg={6} className='hjkl'>
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
                        <h3>Alumni</h3> 
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
        <div className='gallery-heading'>
            <div className='jiop'><h1>Gallery</h1></div>
        </div>
        <div className='main-gallery-div'>
            <div className='gf-div1'>
                {showImg1?<img src={himg5} alt="jh"></img>:null}
                {showImg2?<img src={himg6} alt="jh"></img>:null}
                {showImg3?<img src={himg7} alt="jh"></img>:null}
                {showImg4?<img src={himg8} alt="jh"></img>:null}
                {showImg5?<img src={himg9} alt="jh"></img>:null}
                {showImg6?<img src={himg10} alt="jh"></img>:null}
                {showImg7?<img src={himg11} alt="jh"></img>:null}
                {showImg8?<img src={himg12} alt="jh"></img>:null}
                {showImg9?<img src={himg13} alt="jh"></img>:null}
            </div>
            <div className='gf-div2'>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>          
                    <ImageListItem key={1}>
                    <img
                        src={himg5} 
                        alt="jkl"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(true);
                        setShowImg2(false);
                        setShowImg3(false);
                        setShowImg4(false);
                        setShowImg5(false);
                        setShowImg6(false);
                        setShowImg7(false);
                        setShowImg8(false);
                        setShowImg9(false);
                    }}
                    />
                    </ImageListItem>
                    <ImageListItem key={2}>
                    <img
                        src={himg6} 
                        alt="jkl"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(true);
                            setShowImg3(false);
                            setShowImg4(false);
                            setShowImg5(false);
                            setShowImg6(false);
                            setShowImg7(false);
                            setShowImg8(false);
                            setShowImg9(false);}}
                    />
                    </ImageListItem>
                    <ImageListItem key={3}>
                    <img
                        src={himg7} 
                        alt="jkl"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(false);
                            setShowImg3(true);
                            setShowImg4(false);
                            setShowImg5(false);
                            setShowImg6(false);
                            setShowImg7(false);
                            setShowImg8(false);
                            setShowImg9(false);}}
                    />
                    </ImageListItem>
                    <ImageListItem key={4}>
                    <img
                        src={himg8} 
                        alt="jkl"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(false);
                            setShowImg3(false);
                            setShowImg4(true);
                            setShowImg5(false);
                            setShowImg6(false);
                            setShowImg7(false);
                            setShowImg8(false);
                            setShowImg9(false);}}
                    />
                    </ImageListItem>
                    <ImageListItem key={5}>
                    <img
                        src={himg9} 
                        alt="jkl"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(false);
                            setShowImg3(false);
                            setShowImg4(false);
                            setShowImg5(true);
                            setShowImg6(false);
                            setShowImg7(false);
                            setShowImg8(false);
                            setShowImg9(false);}}
                    />
                    </ImageListItem>
                    <ImageListItem key={6}>
                    <img
                        src={himg10} 
                        alt="jkl"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(false);
                            setShowImg3(false);
                            setShowImg4(false);
                            setShowImg5(false);
                            setShowImg6(true);
                            setShowImg7(false);
                            setShowImg8(false);
                            setShowImg9(false);}}
                    />
                    </ImageListItem>
                    <ImageListItem key={7}>
                    <img
                        src={himg11} 
                        alt="jkl"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(false);
                            setShowImg3(false);
                            setShowImg4(false);
                            setShowImg5(false);
                            setShowImg6(false);
                            setShowImg7(true);
                            setShowImg8(false);
                            setShowImg9(false);}}
                    />
                    </ImageListItem>
                    <ImageListItem key={8}>
                    <img
                        src={himg12} 
                        alt="klkj"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(false);
                            setShowImg3(false);
                            setShowImg4(false);
                            setShowImg5(false);
                            setShowImg6(false);
                            setShowImg7(false);
                            setShowImg8(true);
                            setShowImg9(false);}}
                    />
                    </ImageListItem>
                    <ImageListItem key={9}>
                    <img
                        src={himg13} 
                        alt="jk"
                        loading="lazy"
                        onMouseEnter={()=>{setShowImg1(false);
                            setShowImg2(false);
                            setShowImg3(false);
                            setShowImg4(false);
                            setShowImg5(false);
                            setShowImg6(false);
                            setShowImg7(false);
                            setShowImg8(false);
                            setShowImg9(true);}}
                    />
                    </ImageListItem>
            </ImageList>
            </div>
        </div>
        <div className='hfooter'>
            <Footer />
        </div>
    </>
  )
}

export default Home