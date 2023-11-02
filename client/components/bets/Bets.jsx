import React from 'react';

const Bets = ({ teamsCopy, odds }) => {
  const oddsCalced = {};
  for (let i = 0; i < teamsCopy.length; i++) {
    console.log(odds[teamsCopy[i].name]);
    
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
  console.log(oddsCalced);

  return (
    <div>
      {teamsCopy.map((team, index) => {
        return (
          <div key={crypto.randomUUID()}>
            {team.name}: {Math.round(oddsCalced[team.name] * 100)}
          </div>
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
