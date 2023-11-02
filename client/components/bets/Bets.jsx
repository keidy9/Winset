import React from 'react';
import Bet from './Bet';

const Bets = ({ teamsCopy, odds, phase, semiFinalists, finalists, winner }) => {
  if (phase ==='done') {
    return (<div>
      NO MATCHES AVAILABLE AT THIS MOMENT!
    </div>)
  }


  const oddsCalced = {};
  for (let i = 0; i < teamsCopy.length; i++) {

    oddsCalced[teamsCopy[i + 1].name] =
      odds[teamsCopy[i].name] / odds[teamsCopy[i + 1].name];

    oddsCalced[teamsCopy[i].name] =
      odds[teamsCopy[i + 1].name] / odds[teamsCopy[i].name];

    // Rounds number to 2 decimals
    oddsCalced[teamsCopy[i].name] = oddsCalced[teamsCopy[i].name].toFixed(2);
    oddsCalced[teamsCopy[i + 1].name] =
      oddsCalced[teamsCopy[i + 1].name].toFixed(2);
    i++;
  }
  

  return (
    <div>
      {teamsCopy.map((team, index) => {
        return (
          <Bet
            key={crypto.randomUUID()}
            teamCopy={teamsCopy}
            team={team}
            oddsCalced={Math.round(oddsCalced[team.name] * 100)}
            phase={phase}
            semiFinalists={semiFinalists}
            finalists={finalists}
            winner={winner}
          />
        );
      })}
    </div>
  );
};

export default Bets;

// "_id" serial NOT NULL,
// "created_by_user_id" bigint NOT NULL,
// "team_betted_on_id" bigint NOT NULL,
// "against_team_id" bigint NOT NULL,
// "phase" varchar NOT NULL,
// "odds" bigint NOT NULL,
// "results" varchar NOT NULL,
// "initial_bet" bigint NOT NULL,
// "payout" bigint NOT NULL,
// "total_cash_after_payment" bigint NOT NULL,
