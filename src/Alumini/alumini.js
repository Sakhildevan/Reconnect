import React from 'react'
import './alumini.css'
import Grid from '@mui/material/Grid';
import bg1 from '../assets/background.jpg'
function Alumini() {
  return (
    <>
      <div className='alumini-main-div'>
          <img src={bg1} alt=""  className='bg-image'/>
      </div>
      <div className='alumini-main-text-div'>
        <div className='alumini-main-text-div-inner uk-animation-slide-bottom'>
          <div className='alumini-main-text-div-inner-head'>
            <h1>OUR ALUMINIS ARE WORKING</h1>
            <h1>AT FORTUNE 500 COMPANIES</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus maiores aspernatur quod nobis, saepe neque laudantium similique vero reprehenderit! Obcaecati repudiandae debitis veniam rem facere quod harum velit doloremque?</p>
        </div>
      </div>
      <div className='oooo'>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
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
          <Grid item xs={6} md={3}>
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
          <Grid item xs={6} md={3}>
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
          <Grid item xs={6} md={3}>
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
    </>
  )
}
export default Alumini