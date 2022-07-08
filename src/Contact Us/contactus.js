import React from 'react'
import './contactus.css'
import Contactimg1 from '../assets/location-dot-solid.svg'
import Contactimg2 from '../assets/phone-solid.svg'
import Contactimg3 from '../assets/mobile-screen-solid.svg'
import Contactimg4 from '../assets/envelope-solid.svg'
import Footer from '../Footer/footer';
import Button from '@mui/material/Button'
function ContactUs() {
  return (
    <>
        <div className='contactUs-main-div'>
            <div className='contact-us-heading1'>
                <h1>Contact Us</h1>
            </div>
            <div className='ContactUs-content-text-div'>
                <div className='contact-us-heading2'>
                    <h3>&nbsp;Location</h3>
                </div>
                <div className='contactUs-content-flex'>
                    <div className='contactUs-content-flex-div1'>
                        <p>&nbsp; Amrita Vishwa Vidyapeetham</p>
                        <p>&nbsp; Amritapuri, Clappana P.O</p>
                        <p>&nbsp; Kollam, Kerala-690525</p>
                    </div>
                    <div className='contactUs-content-flex-div2'>
                        <p><span className='lll'><img src={Contactimg2} alt="phone" /></span>+919745626449&nbsp;&nbsp;</p>
                        <p><span className='lll'><img src={Contactimg3} alt="phone" /></span>+919754848449&nbsp;&nbsp;</p>
                        <p><span className='lll'><img src={Contactimg4} alt="phone" /></span>jkkjhl@123</p>
                    </div>
                    <div className='locationdiv'>
                        <div className='ContactUs-logo-div'>
                            <img src={Contactimg1} alt="contact-img1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='form-div-contact-us'>
                <form action="">
                    <div className='form-div1'>
                        <input type="text" name='name' id='name' placeholder=' Name:' required />
                        <input type="text" name='company' id='company' placeholder=' Company:' required />
                    </div>
                    <div className='form-div2'>
                        <input type="text" name='email' id='email' placeholder=' E-mail:' required />
                        <input type="phone" name='phone' id='phone' placeholder=' Ph:' required/>
                    </div>
                    <div className='form-div3'>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder=' Message:'></textarea>
                    </div>
                    <div className='ContactUs-Button-div'>
                        <div className='contact-us-empty-div'>

                        </div>
                        <div className='ContactUs-Button-div-button'>
                            <Button variant="contained" className='jklkkk'>Send</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ContactUs