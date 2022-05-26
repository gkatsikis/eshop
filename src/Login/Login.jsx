// React
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// CSS
import './Login.css'
import StoreIcon from '@mui/icons-material/Store'

// Firebase
import { auth } from "../firebase"

const Login = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.mesage))
  }

  const register = e => {
    e.preventDefault()

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if (auth) {
              navigate('/')
            }
        })
        .catch(error => alert(error.mesage))
  }

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

          <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing in you agree to The CoffeeShop website conditions of use and sale. Please see our privacy notice, our cookies notice and our interest-based ads notice.
        </p>

        <button className="login__registerButton" onClick={register}>Create your CoffeeShop Account</button>
      </div>
    </div>
   );
}
 
export default Login;