import React from 'react';
import { useDispatch } from 'react-redux';
import { signup_login } from '../../state/userSlice';

const Signup = ({ isSignUp }) => {
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // sets mode to put in url depending on if clicked signup or login
    const mode = e.target[2].innerText === 'Sign Up!' ? 'signup' : 'login';
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    e.target.elements.username.value = '';
    e.target.elements.password.value = '';
    const sendData = {
      username,
      password,
    };
    console.log(e);
    console.log(mode);
    try {
      const response = await fetch(`http://localhost:3000/${mode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      });
      const data = await response.json();
      console.log('DATA!!!!!!!: ', data);
      dispatch(signup_login(data));
    } catch (error) {
      console.log('invalid sign-up or login credentials');
    }
  };

  return (
    <div className="signup-container">
      <div className="inspirational-quote">
        99% of gamblers quit right before they hit it big!<br></br> Be in the
        top 1% with a WINner's mindSET... <br></br>
        <div className="welcome-quote">WELCOME TO WINSET</div>
      </div>
      {isSignUp ? (
        <div>
          <header className='login-header'>SIGN UP</header>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <br></br>
            <input
              className="login-input"
              type="text"
              name="username"
              placeholder="Enter a username..."
              autoComplete="off"
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              className="login-input"
              type="password"
              name="password"
              autoComplete="off"
            />
            <br></br>
            <div className="login-button-container">
              <button className="login-button" type="submit">
                Sign Up!
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <header className='login-header'>Login</header>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <br></br>
            <input
              className="login-input"
              type="text"
              name="username"
              placeholder="Enter a username..."
              autoComplete="off"
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              className="login-input"
              type="password"
              name="password"
              autoComplete="off"
            />
            <br></br>
            <div className="login-button-container">
              <button className="login-button" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
