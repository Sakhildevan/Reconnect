import React from 'react'
import './footer.css'
import fimg1 from '../assets/facebook-brands.svg'
import fimg2 from '../assets/instagram-square-brands.svg'
import fimg3 from '../assets/twitter-brands.svg'
import fimg4 from '../assets/youtube-brands.svg'
import fimg5 from '../assets/discord-brands.svg'
function Footer() {
  return (
    <>
        <div className='main-footer'>
            <div className='main-footer-flex'>
                <div className='main-footer-innerflex1'>
                    <div className='main-footer-innerflex1-div1'>
                        <div className='footer-logo-div'>
                            <h1>Reconect</h1>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, delectus voluptas! Quasi nisi dicta dolorem atque earum numquam quos odio doloremque, temporibus non dolore</p>
                    </div>
                    <div className='main-footer-innerflex1-div2'>
                        <h4>USEFUL LINKS</h4>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className='main-footer-inner-flex2'>
                    <div className='main-footer-innerflex2-div1'>
                        <h4>IMPORTANT LINKS</h4>
                        <p>Events</p>
                        <p>Alumini</p>
                        <p>Register</p>
                        <p>Members</p>
                    </div>
                    <div className='main-footer-innerflex2-div2'>
                        <h4>CONTACT US</h4>
                        <p>Bangalore,</p>
                        <p>India,</p>
                        <p>Ph:79472</p>
                        <p>Email:ugbvw@gmail.com</p>
                        <div className='ozy'>
                            <img src={fimg1} alt="social" />
                            <img src={fimg2} alt="social" />
                            <img src={fimg3} alt="social" />
                            <img src={fimg4} alt="social" />
                            <img src={fimg5} alt="social" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='copy-social-media'>
                <div className='copyright-text'>
                    <p>©2021-2022 Reconnect. All Rights Reserved.</p>
                </div>                
            </div>
        </div>
    </>
  )
}

export default Footer