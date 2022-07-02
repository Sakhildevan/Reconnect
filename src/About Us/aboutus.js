import React from 'react'
import './aboutus.css'
import aboutimg1 from '../assets/crunch-time-concept-in-flat-cartoon-design-overworked-man-and-woman-working-in-office-late-at-night-business-deadline-overtime-stress-at-work-illustration-with-people-scene-background-vector.webp';
import aimg3 from '../assets/Amrita_student.jpg'
import aimg4 from '../assets/envydt.webp'
import Footer from '../Footer/footer';
function Aboutus() {
  return (
    <>
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
    <div className='about-section2'>
        <div className='about-section2-div2'>
            <img src={aimg3} alt="" />
        </div>
        <div className='about-section2-div1'>
            <div className='about-section2-div1-inner'>
                <h2>Our Vision</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste numquam quaerat repellendus corrupti voluptas hic explicabo alias officiis quo non. Magni esse molestias aliquid! Eos doloribus quidem ad non animi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus, quaerat expedita natus eligendi temporibus ut. Magni expedita error cum magnam eos, tempore animi culpa totam sequi ducimus? Commodi, possimus.</p>
            </div>
        </div>
    </div>
    <div className='about-section3'>
        <div className='about-section2-div1'>
            <div className='about-section2-div1-inner'>
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste numquam quaerat repellendus corrupti voluptas hic explicabo alias officiis quo non. Magni esse molestias aliquid! Eos doloribus quidem ad non animi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus, quaerat expedita natus eligendi temporibus ut. Magni expedita error cum magnam eos, tempore animi culpa totam sequi ducimus? Commodi, possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, amet dicta.</p>
            </div>
        </div>
        <div className='about-section2-div2'>
            <img src={aimg4} alt="" />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Aboutus