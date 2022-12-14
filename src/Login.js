import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e=> {
        e.preventDefault();

        // some fancy firebase login shit

    }

    const register = e =>{
        e.preventDefault();

         // some fancy firebase login shit
    }
    return (
    <div className='login'>

    <Link to = '/'>
    <img className="login__logo"
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
    </Link>

<div className='login__container'>
<h1>
Sign-in
</h1>
<form>
<h5>
    E-mail or Phone number
</h5>
{/* //e -> event */}
<input type ='text' value={email}  onChange={e=> setEmail(e.target.value)}/>
<h5>
    Password
</h5>
<input type ='password' value={password}  onChange={e=> setPassword(e.target.value)}/>

<button type='submit' onClick={signIn} className='login__signInButton'> Sign In</button>
</form>

<p>
By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.
</p>

<p>
Need help?
</p>
</div>

<button onClick={register} className='login__registerButton'>
Create your Amazon account
</button>
</div>
)
}

export default Login


