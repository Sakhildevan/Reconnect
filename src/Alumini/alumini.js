import React from 'react'
import './alumini.css'
import Grid from '@mui/material/Grid';
import bg1 from '../assets/background.jpg'
import Footer from '../Footer/footer';
import Aos from  'aos';
import "aos/dist/aos.css";
import "../../node_modules/aos/dist/aos.css"
import {useEffect} from 'react';
import Header from '../Header/header'
function Alumini() {
    useEffect(() => {
      Aos.init({duration:1000});
  },[]);
  return (
    <>
        <Header></Header>
      <div className='alumini-main-div'>
          <img src={bg1} alt=""  className='bg-image'/>
      </div>
      <div className='alumini-main-text-div'>
        <div className='alumini-main-text-div-inner uk-animation-slide-bottom' tabindex="0">
          <div className='alumini-main-text-div-inner-head'>
            <h1>OUR ALUMNIS ARE WORKING</h1>
            <h1>AT FORTUNE 500 COMPANIES</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus maiores aspernatur quod nobis, saepe neque laudantium similique vero reprehenderit! Obcaecati repudiandae debitis veniam rem facere quod harum velit doloremque?</p>
        </div>
      </div>
      <div className='oooo'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div className="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <div className='empty-card-div'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}  data-aos="fade-up">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src={bg1} width="1800" height="1200" alt=""></img>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </Grid>                                                                              
        </Grid>
      </div>
      <Footer />
    </>
  )
}
export default Alumini