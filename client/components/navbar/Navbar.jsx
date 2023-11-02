import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, addCash } from '../../state/userSlice';

const Navbar = ({ isBracketHandler }) => {
  const { username, total_cash } = useSelector(
    ({ userReducer }) => userReducer
  );
  const dispatch = useDispatch();

  const addCashHandler = () => {
    dispatch(addCash(500))
  }

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="navbar-container">
      <div className="navbar-title">WinSet</div>
      <div className="navbar-bracket" onClick={isBracketHandler}>
        Bracket
      </div>
      <div className="navbar-bets" onClick={isBracketHandler}>
        Bets
      </div>
      <div className="navbar-user-info">
        <div className="navbar-cash">Cash: ${total_cash}</div>
        <div className='circle' onClick={addCashHandler}></div>
        {/* <div className="logout-username">{username}</div> */}
        <button className="logout-button" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
