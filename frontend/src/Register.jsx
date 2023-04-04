import React, { useEffect } from 'react';
import "./Register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { client } from './app/userSlice';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const container = document.getElementById('container');
        if (e.target.id === 'signUp') {
          container.classList.add('right-panel-active');
        } else if (e.target.id === 'signIn') {
          container.classList.remove('right-panel-active');
        }
      };
    
      useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        signUpButton.addEventListener('click', handleClick);
        signInButton.addEventListener('click', handleClick);

        const container = document.getElementById('container');
        container.classList.add('right-panel-active');
    
        return () => {
          signUpButton.removeEventListener('click', handleClick);
          signInButton.removeEventListener('click', handleClick);
        };
      }, []);

      const handleSignin = async (event) => {
        event.preventDefault();
        const config = {
            method: "post",
            url: "http://localhost:5000/api/v1/auth/login",
            data: {
                email: event.target.form[0].value,
                password: event.target.form[1].value
            }
        }
        const {data} = await axios(config);
        console.log({data})
        if(data.success){
            dispatch(client(data.data))
            navigate('/');
        }else{
            alert("provide valid user details")
        }
      };

      const handleRegister = async (event) => {
        event.preventDefault();
        const config = {
            method: "post",
            url: "http://localhost:5000/api/v1/auth/register",
            data: {
                username:event.target.form[0].value,
                email: event.target.form[1].value,
                password: event.target.form[2].value
            }
        }
        const {data} = await axios(config);
        console.log({data})
        if(data.success){
            dispatch(client(data.data))
            navigate('/');
        }else{
            alert("user already exist for this email")
        }
    };
  
  return (
    <div className="body" style={{overflow: "hidden"}}>
    {/* <!-- Animated Wave Background  --> */}
    <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
    {/* <!-- Log In Form Section --> */}
    <section>
        <div className="log-container" id="container" style={{width: "720px", overflow: 'hidden'}}>
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Sign Up</h1>
                    <div className="social-container">
                        <a href="https://Github.com/"  className="social"><i
                                className="fab fa-github"></i></a>
                        <a href="https://Codepen.io/"  className="social"><i
                                className="fab fa-codepen"></i></a>
                        <a href="mailto:"  className="social"><i
                                className="fab fa-google"></i></a>
                    </div>
                    <span>Or use your Email for registration</span>
                    <label>
                        <input type="text" placeholder="Name" />
                    </label>
                    <label>
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" />
                    </label>
                    <button className='reg-button' onClick={handleRegister} style={{marginTop: "9px"}}>Confirm</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="https://Github.com/"  className="social"><i
                                className="fab fa-github"></i></a>
                        <a href="https://Codepen.io/"  className="social"><i
                                className="fab fa-codepen"></i></a>
                        <a href="mailto:"  className="social"><i
                                className="fab fa-google"></i></a>
                    </div>
                    <span> Or sign in using E-Mail Address</span>
                    <label>
                        <input type="email" placeholder="Email" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" />
                    </label>
                    <a href="/">Forgot your password?</a>
                    <button   className='reg-button' onClick={handleSignin}>Confirm</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Log in</h1>
                        <p>Sign in here if you already have an account </p>
                        <button className=" reg-button ghost mt-5" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Create, Account!</h1>
                        <p>Sign up if you still don't have an account ... </p>
                        <button className="reg-button ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
  )
}

export default Register