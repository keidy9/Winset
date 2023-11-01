import React from 'react';

const MatchBox = ({ firstTeam, secondTeam, matchNum }) => {
//   const teamBox = `team-box${matchNum}`;
//   const horizontalLine = `horizontal-line${matchNum}`;
//   const verticalLine = `vertical-line${matchNum}`;
  console.log(firstTeam);
  return (
    <>
      <div className={teamBox}>{firstTeam.name}</div>
      {/* <div className="line-container">
        <div className={horizontalLine}></div>
      </div>
      <div className={teamBox}>{secondTeam.name}</div> */}
    </>
  );
};

export default MatchBox;
