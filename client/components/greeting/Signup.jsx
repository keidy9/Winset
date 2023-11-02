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
      dispatch(signup_login( data ));
    } catch (error) {
      console.log('invalid sign-up or login credentials');
    }
  };

  return (
    <div className='signup-container'>
      <div>99% of gamblers quit right before they hit it big!</div>
      {isSignUp ? (
        <div>
          <header>SIGN UP</header>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <br></br>
            <input
              type="text"
              name="username"
              placeholder="Enter a username..."
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input type="password" name="password" />
            <br></br>
            <button type="submit">Sign Up!</button>
          </form>
        </div>
      ) : (
        <div>
          <header>Login</header>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <br></br>
            <input
              type="text"
              name="username"
              placeholder="Enter a username..."
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
            <input type="password" name="password" />
            <br></br>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
