import React from 'react'
import './contactus.css'
import Contactimg1 from '../assets/location-dot-solid.svg'
import Contactimg2 from '../assets/phone-solid.svg'
import Contactimg3 from '../assets/mobile-screen-solid.svg'
import Contactimg4 from '../assets/envelope-solid.svg'
function ContactUs() {
  return (
    <div className='ContactUs-main-flex'>
        <div className='ContactUs-main-flex-div1'>
            <div className='ooo'>
                <div className='ContactUs-main-flex-div1-flex1'>
                    <div className='Contactus-row1'>
                        <div className='Contactus-icon-image-div'>
                            <img src={Contactimg1} alt="location-icon" />
                            <p>Amrita Vishwa Vidyapeetham,</p>
                            <p>Amritapuri, Clappana P.O.,</p>
                            <p>Kollam, Kerala - 690525</p>
                        </div>
                    </div>
                    <div className='Contactus-row1'>
                        <div className='Contactus-icon-image-div'>
                            <img src={Contactimg2} alt="phone-icon" />
                            <p>Ph:9745626449</p>
                        </div>
                    </div>
                </div>
                <div className='ContactUs-main-flex-div1-flex2'>
                    <div className='Contactus-row2'>
                        <div className='Contactus-icon-image-div'>
                            <img src={Contactimg3} alt="mobile-icon" />
                            <p>Ph:9745626449</p>
                        </div>
                    </div>
                    <div className='Contactus-row2'>
                        <div className='Contactus-icon-image-div'>
                            <img src={Contactimg4} alt="mail-icon" />
                            <p>shogilpp@am.amrita.edu</p>
                            <p>rahulm@am.amrita.edu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='ContactUs-main-flex-div2'>
            <div className='ContactUs-main-flex-div2-Contactformdiv'>
                <div className='Contact-form-heading'>
                    <h2>Contact Us</h2>
                </div>
                <div className='Contact-form-form'>
                    <form action="">
                        <div className='form-name'>
                            <input type="text" name='name' id='name' placeholder=' Enter your name'/> 
                        </div>
                        <div className='form-email'>
                            <input type="email" name='email' id='email' placeholder=' Enter a valid email address' />
                        </div>
                        <div className='form-reason'>
                            <textarea name="text" id="text" cols="30" rows="8"></textarea>
                        </div>
                        <div className='form-button'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs