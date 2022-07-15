import React, { useState } from 'react'
import './Signup.css'
import Header from '../Header/header'
// import Simg1 from '../assets/Authentication.png'
function Signup() {
const [showSsignup,setshowSsignup]=useState(false);
const [showAsignup,setshowAsignup]=useState(false);
const [showAdsignup,setshowAdsignup]=useState(false);
const [showMessage,setshowMessage]=useState(true);
  return (
    <>
    
    <div className='Signup-main-div-flex'>
    <Header></Header>
        <div className='signup-div1'>
            <div>
                <h1 className='head'>Sign Up</h1>
                <div className='padding-div'>
                    <div><h2 style={{color:'#1B365C'}}>Category</h2></div>
                    <div>
                        <div className='but1'>
                            <button onClick={()=>{setshowSsignup(true);setshowAsignup(false);setshowAdsignup(false);setshowMessage(false)}}>Student</button>
                        </div>
                        <div className='but1'>
                            <button onClick={()=>{setshowAsignup(true);setshowSsignup(false);setshowAdsignup(false);setshowMessage(false)}}>Alumini</button>
                        </div>
                        <div className='but1'>
                            <button onClick={()=>{setshowAdsignup(true);setshowSsignup(false);setshowAsignup(false);setshowMessage(false)}}>Admin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='signup-div2'>
            {showSsignup?
             <div className='signup-student-form'>
             <form action="">
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="sname">Name:</label>
                     </div>
                     <div>
                         <input type="text" name="" id="sname" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="rollno">Roll No:</label>
                     </div>
                     <div>
                         <input type="number" name="" id="rollno" />
                     </div>  
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="club">Club:</label>
                     </div>
                     <div>
                         <input type="text" name="" id="club" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="semil">E-mail:</label>
                     </div>
                     <div>
                         <input type="email" name="" id="semail" />
                     </div>  
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="spassword">Password:</label>
                     </div>
                     <div>
                         <input type="password" name="" id="spassword" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         
                     </div>
                     <div className='last-form-flex'>
                         <button>Submit</button>
                         <button>Reset</button>
                     </div>
                 </div>
             </form>
         </div>
            :null}
        {showAsignup?
            <div className='signup-student-form'>
             <form action="">
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="aname">Name:</label>
                     </div>
                     <div>
                         <input type="text" name="" id="aname" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="empid">Emp:id</label>
                     </div>
                     <div>
                         <input type="number" name="" id="empid" />
                     </div>  
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="aclub">Club:</label>
                     </div>
                     <div>
                         <input type="text" name="" id="aclub" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="yop">Year of passing:</label>
                     </div>
                     <div>
                         <input type="date" name="" id="yop" />
                     </div>  
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="apassword">Password:</label>
                     </div>
                     <div>
                         <input type="password" name="" id="apassword" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         
                     </div>
                     <div className='last-form-flex'>
                         <button>Submit</button>
                         <button>Reset</button>
                     </div>
                 </div>
             </form>
         </div>
            :null}
                {showAdsignup?
            <div className='signup-student-form'>
             <form action="">
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="adname">Name:</label>
                     </div>
                     <div>
                         <input type="text" name="" id="adname" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="district">District</label>
                     </div>
                     <div>
                         <input type="text" name="" id="district" />
                     </div>  
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="">Id:</label>
                     </div>
                     <div>
                         <input type="text" name="" id="id" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="ademail">E-mail:</label>
                     </div>
                     <div>
                         <input type="email" name="" id="ademail" />
                     </div>  
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         <label htmlFor="adpassword">Password:</label>
                     </div>
                     <div>
                         <input type="password" name="" id="adpassword" />
                     </div>
                 </div>
                 <div className='sf-flex1'>
                     <div className='label'>
                         
                     </div>
                     <div className='last-form-flex'>
                         <button>Submit</button>
                         <button>Reset</button>
                     </div>
                 </div>
             </form>
         </div>
            :null}
              {showMessage?
            <div className='signup-student-form'>
             <form action="">
                 <h1>Select a Category</h1>
             </form>
         </div>
            :null}
        </div>
    </div>
    </>
  )
}

export default Signup