import React, { useState } from 'react'
import './LoginSingUp.css';

import user_icon from '../Assets/person.png'
import Email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSingUp = () => {
  const[action,setAction] = useState("Login");
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
          <img src={user_icon} alt=''/>
          <input type="text" placeholder='Name'/>
        </div>}
        
        <div className='input'>
          <img src={Email_icon} alt=''/>
          <input type="Email" placeholder='Email id' />
      </div>
        <div className='input'>
          <img src={password_icon} alt=''/>
          <input type="password" placeholder='password'/>
          </div>
          {action==="Sing Up"?<div></div>:<div className='forgot-password'>Lost password?<span>Click here!</span></div>}
          <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("sing Up")}}>Sing Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
          </div>
          </div>
    </div>
  )
}
 
export default LoginSingUp