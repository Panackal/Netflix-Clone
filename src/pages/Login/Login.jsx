import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'

const Login = () => {
const [signState,setsignState]= useState('Sign In')

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const user_auth = async (event)=>{
  event.preventDefault();
  if(signState==='Sign In'){
    await login(email,password)
  }
  else{
    await signup(name,email,password)
  }
}



  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==='Sign Up'?<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} 
          placeholder='Your Name'/>:<></>}
          
          <input type="email" placeholder='Your Email'value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder='Enter Password'value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==='Sign In'?<p>New to Netflix ?<span onClick={()=>{setsignState('Sign Up')}}>Sign Up Now</span></p>:<p>already have Account ?<span onClick={()=>{setsignState('Sign In')}}>Sign In Now</span></p>}
          
          

        </div>
      </div>
    </div>
  )
}

export default Login