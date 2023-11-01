import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/greeting/Login.jsx';
import Signup from './components/greeting/Signup.jsx';

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div>
      {(!isLoggedIn && !isSignUp) ? <Signup /> : ''}
      {(!isLoggedIn && isSignUp) ? <Login /> : ''}
      <button
        onClick={() => {
          setIsSignUp(!isSignUp);
        }}
      >
        {isSignUp ? 'Login' : 'Sign up'}
      </button>
    </div>
  );
};

export default App;
