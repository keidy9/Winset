import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTeams, getPlayers } from '../../state/teamSlice';

const TournamentBracket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTeams();
    fetchPlayers();
  }, []);

  const fetchTeams = async () => {
    const response = await fetch(`http://localhost:3000/teams`);
    const data = await response.json();
    dispatch(getTeams(data));
  };

  const fetchPlayers = async () => {
    const response = await fetch(`http://localhost:3000/players`);
    const data = await response.json();
    dispatch(getPlayers(data));
  };

  return (
    <div className="bracket-container">
      <div className="match-box-qf1">
        <div className="team-box">team1</div>
        <div className="team-box">team2</div>
      </div>
      <div className="match-box-qf2">
        <div className="team-box">team3</div>
        <div className="team-box">team4</div>
      </div>
      <div className="match-box-qf3">
        <div className="team-box">team5</div>
        <div className="team-box">team6</div>
      </div>
      <div className="match-box-qf4">
        <div className="team-box">team7</div>
        <div className="team-box">team8</div>
      </div>
    </div>
  );
};

export default TournamentBracket;
