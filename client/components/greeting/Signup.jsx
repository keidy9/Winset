import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../state/userSlice';

const Signup = () => {
  const dispatch = useDispatch();

  const signupHandler = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    e.target.elements.username.value = '';
    e.target.elements.password.value = '';
    const sendData = {
      username,
      password,
    };
    console.log(sendData);
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    });
    const data = await response.json();
    console.log('DATA!!!!!!!: ', data);
    dispatch(signup({ data }));
  };

  return (
    <div>
      <header>SIGN UP</header>
      <form onSubmit={signupHandler}>
        <label htmlFor="username">Username</label>
        <br></br>
        <input type="text" name="username" placeholder="Enter a username..." />
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input type="password" name="password" />
        <br></br>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Signup;
