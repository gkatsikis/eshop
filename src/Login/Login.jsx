// React
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// CSS
import './Login.css'
import StoreIcon from '@mui/icons-material/Store'

// Firebase
import { auth } from "../Firebase"

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return ( 
    <div className="login">
      <Link to='/' className="login__logo">
        <div className="login__logo">
          <StoreIcon className='login__logoImage' fontSize="large" />
          <h2 className="login__logoTitle">The CoffeeShop</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing in you agree to The CoffeeShop website conditions of use and sale. Please see our privacy notice, our cookies notice and our interest-based ads notice.
        </p>

        <button className="login__registerButton">Create your CoffeeShop Account</button>
      </div>
    </div>
   );
}
 
export default Login;