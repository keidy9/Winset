import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Signup from './components/greeting/Signup.jsx';
import Navbar from './components/navbar/Navbar.jsx';

import './App.scss';
import TournamentBracket from './components/tournamentBracket/TournamentBracket.jsx';

const App = () => {
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div>
      {/* SIGN UP/LOGIN __________________________________________________ */}
      {!isLoggedIn ? (
        <>
          <Signup isSignUp={isSignUp} />
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp ? 'Login' : 'Sign up'}
          </button>
        </>
      ) : (
        ''
      )}

      {/* MAIN APP __________________________________________________ */}
      {isLoggedIn && (
        <div className="navbar">
          <Navbar />
          <TournamentBracket />
        </div>
      )}
    </div>
  );
};

export default App;
