import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='main-login-flex'>
        <div className='login-div1'>
            <div className='background-div'>

            </div>
        </div>
        <div className='login-div2'>
            <div className='login-heading'>
                <h1>Member Login</h1>
            </div>
            <div className='login-form'>
                <form action="">
                    <div className='frmldiv'>
                        <input type="text" name='username' id='username'/>
                    </div>
                    <div className='frmldiv'>
                        <input type="password" name='password' id='lpaswrd'/>
                    </div>
                    <div className='frmldiv'>
                        <button>Login</button>
                    </div>
                    <div className='frmldiv'>
                        <a href="#">Forget Password ?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login