import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCash, placeBet, updateBets, betRemoveCash } from '../../state/userSlice';

const Bet = ({
  teamCopy,
  team,
  oddsCalced,
  phase,
  semiFinalists,
  finalists,
  winner,
}) => {
  const user_id = useSelector(({ userReducer }) => userReducer._id);
  const user_cash = useSelector(({ userReducer }) => userReducer.total_cash);
  const bets = useSelector(({ userReducer }) => userReducer.bets);

  const dispatch = useDispatch();
  if (oddsCalced < 100) {
    oddsCalced = -100 - (100 - oddsCalced);
  }

  /** LOGIC FOR CLOSING BETS, SHOULD HAPPEN AUTOMATICALLY */
//   const updatedBets = [...bets];
//   console.log(updatedBets);
//   for (let i = 0; i < updatedBets.length; i++) {
//     if (updatedBets[i].results === null && updatedBets[i].phase === phase) {
//       let { team_betted_on, odds, initial_bet } = updatedBets[i];
//       if (odds < 0) odds = 100 / Math.abs(odds);
//       else odds = odds / 100;
//       if (phase === 'quarterfinals' && semiFinalists[team_betted_on]) {
//         updatedBets[i].payout = initial_bet + initial_bet * odds;
//         updatedBets[i].results = 'hit';
//       } else if (phase === 'semifinals' && finalists[team_betted_on]) {
//         updatedBets[i].payout = initial_bet + initial_bet * odds;
//         updatedBets[i].results = 'hit';
//       } else if (phase === 'finals' && winner[team_betted_on]) {
//         updatedBets[i].payout = initial_bet + initial_bet * odds;
//         updatedBets[i].results = 'hit';
//       } else {
//         dispatch(updateBets([i, {payout: 0}]));
//         // updatedBets[i].results = 'miss';
//       }
//       console.log('fsaaaaaaaaa', updatedBets[i].payout)
//       dispatch(addCash(updatedBets[i].payout));
//       updatedBets[i].total_cash_after_payment = user_cash;
//     }
//     // dispatch(updateBets(updatedBets));
//   }

  /** LOGIC FOR PLACING BETS */
  const onPlaceBetHandler = (e) => {
    e.preventDefault();
    if (e.target.elements[0].value > user_cash) {
      console.log('11111111111111111111111');

      e.target.elements[0].value = '';
      e.target.elements[0].placeholder = 'NOT ENOUGH CASH!';
      return;
    }
    if (!Number(e.target.elements[0].value)) {
      console.log('222222222222222222222222222');
      e.target.elements[0].value = '';
      e.target.elements[0].placeholder = 'ENTER A VALID NUMBER';
      return;
    }
    if (e.target.elements[0].value === 'Place your bet...') {
      console.log('333333333333333333333333333333');
      e.target.elements[0].value = '';
      return;
    }
    const betObj = {
      created_by_user_id: user_id,
      team_betted_on: team.name,
      phase: phase,
      odds: oddsCalced,
      results: null,
      initial_bet: e.target.elements[0].value,
      payout: null,
      total_cash_after_payment: null,
    };
    dispatch(betRemoveCash(e.target.elements[0].value))
    const betsArray = [...bets]
    betsArray.push(betObj)
    dispatch(placeBet(betsArray));
    e.target.elements[0].value = '';
  };

  // "_id" serial NOT NULL,
  // "created_by_user_id" bigint NOT NULL,
  // "team_betted_on_id" bigint NOT NULL,
  // "against_team_id" bigint NOT NULL, // not included
  // "phase" varchar NOT NULL,
  // "odds" bigint NOT NULL,
  // "results" varchar NOT NULL,
  // "initial_bet" bigint NOT NULL,
  // "payout" bigint NOT NULL,
  // "total_cash_after_payment" bigint NOT NULL,

  return (
    <div className="bet-container">
      <div className="bet-team-odds-container">
        <div className='bet-team'>
        {team.name}:
        </div>
        <div className='bet-odds'>
        {oddsCalced}
        </div>
      </div>
      <form onSubmit={onPlaceBetHandler} className='bet-input-form'>
        <p className='bet-dollar-sign'>$</p>
        <input
          className="bet-input"
          type="text"
          name="bet"
          placeholder="Place your bet..."
          autoComplete='off'
        />
        <button className="bet-place-button">PLACE BET!</button>
      </form>
      <div className='bet-separator'></div>
    </div>
  );
};

export default Bet;
