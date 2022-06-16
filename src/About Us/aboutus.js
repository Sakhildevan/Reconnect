import React from 'react'
import './aboutus.css'
import aboutimg1 from '../assets/crunch-time-concept-in-flat-cartoon-design-overworked-man-and-woman-working-in-office-late-at-night-business-deadline-overtime-stress-at-work-illustration-with-people-scene-background-vector.webp';
function Aboutus() {
  return (
    <div className='about-us-container-flex'>
        <div className='about-us-container-flex-div1'>
            <div className='about-us-container-flex-div1-text'>
                <div className='about-us-container-flex-div1-text-heading'>
                    <h2>About Us</h2>
                </div>
                <div className='about-us-container-flex-div1-text-paragraph'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, cumque eos. Consequuntur, mollitia saepe vitae minus neque, libero modi explicabo sed voluptas cumque ipsum. Quae harum nisi doloribus aperiam corporis!</p>
                </div>
            </div>
        </div>
        <div className='about-us-container-flex-div2'>
            <div className='about-us-container-flex-div2-image-div'>
                <img src={aboutimg1} alt='about-us'/>
            </div>
        </div>
    </div>
  )
}

export default Aboutus