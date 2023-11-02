import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Signup from './components/greeting/Signup.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { getTeams, getPlayers } from './state/teamSlice';
import {
  getRandomPoints,
  getTeamPoints,
} from './components/tournamentBracket/helperFunctions.js';

import TournamentBracket from './components/tournamentBracket/TournamentBracket.jsx';
import Bets from './components/bets/Bets.jsx';
import './App.scss';

const App = () => {
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);
  const teamsArray = useSelector(({ teamReducer }) => teamReducer.teams);
  const playersArray = useSelector(({ teamReducer }) => teamReducer.players);
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isBracket, setIsBracket] = useState('bracket');
  const [teams, setTeams] = useState(teamsArray);
  const [teamsCopy, setTeamsCopy] = useState(teamsArray);
  const [players, setPlayers] = useState(playersArray);
  const [teamPointsObj, setTeamPointsObj] = useState([]);
  const [playerPointsObj, setPlayerPointsObj] = useState([]);
  const [phase, setPhase] = useState('quarterfinals');
  const [gamesObj, setGamesObj] = useState({});
  const [semiFinalists, setSemiFinalists] = useState([]);
  const [finalists, setFinalists] = useState([]);
  const [winner, setWinner] = useState([]);
  /** FETCH TEAMS LOGIC  */
  useEffect(() => {
    fetchTeams();
    fetchPlayers();
  }, []);

  useEffect(() => {
    setTeams(teamsArray);
    setTeamsCopy(teamsArray);
    setPlayers(playersArray);
  }, [teamsArray, playersArray]);

  const fetchTeams = async () => {
    const response = await fetch(`http://localhost:3000/teams`);
    const data = await response.json();
    const shuffledData = shuffleArray(data.slice());
    // console.log('shuffled', shuffledData);
    // console.log(shuffledData);
    // setTeams(shuffledData);
    dispatch(getTeams(shuffledData));
    // setTeams(teamsArray);
  };

  const fetchPlayers = async () => {
    const response = await fetch(`http://localhost:3000/players`);
    const data = await response.json();
    dispatch(getPlayers(data));
  };

  // Randomize array in-place using Durstenfeld shuffle algorithm
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  /** RENDER PAGES LOGIC */
  const isBracketHandler = (e) => {
    // console.log(e.target.innerHTML);
    // console.log(e.target.innerHTML.toLowerCase().toString());
    setIsBracket(e.target.innerHTML.toLowerCase().toString());
  };

  /** ADVANCE TOURNAMENT LOGIC */
  const fastForward = () => {
    if (phase === 'done') return;
    teamsCopy.forEach((team) => {
      teamPointsObj[team.name] = {
        points: 0,
        players: {},
      };
    });
    players.forEach((player) => {
      const points = getRandomPoints(player.tier);
      teamPointsObj[player.team].points += points;
      teamPointsObj[player.team].players[player.name] = {
        player: player.name,
        tier: player.tier,
        points: points,
      };
      // console.log(teams);
      // console.log(teamPointsObj);
    });
    setGamesObj((prevState) => {
      prevState[phase] = teamPointsObj;
      return prevState;
    });
    // console.log(teams);
    // console.log(teams[0].name)
    let teamsCopyCopy = [...teamsCopy];
    for (let i = 0; i < teamsCopyCopy.length; ++i) {
      console.log(i);
      // console.log(teamPointsObj[teams[i].name].points)
      // console.log(teamPointsObj[teams[i + 1].name].points)
      teamPointsObj[teamsCopyCopy[i].name].points >
      teamPointsObj[teamsCopyCopy[i + 1].name].points
        ? (teamsCopyCopy = teamsCopyCopy.filter(
            (team) => team.name !== teamsCopyCopy[i + 1].name
          ))
        : (teamsCopyCopy = teamsCopyCopy.filter(
            (team) => team.name !== teamsCopyCopy[i].name
          ));
    }
    setTeamsCopy(teamsCopyCopy);
    // FOR QUARTERFINALS
    if (phase === 'quarterfinals') {
      setSemiFinalists(teamsCopyCopy);
      setPhase('semifinals');
    }
    // FOR SEMIFINALS
    else if (phase === 'semifinals') {
      setFinalists(teamsCopyCopy);
      setPhase('finals');
    }
    //FOR FINALS
    else if (phase === 'finals') {
      setWinner(teamsCopyCopy);
      setPhase('done');
    }
  };

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
      {isLoggedIn && isBracket === 'bracket' && (
        <div className="navbar">
          <Navbar isBracketHandler={isBracketHandler} />
          <TournamentBracket
            teams={teams}
            fastForward={fastForward}
            phase={phase}
            semiFinalists={semiFinalists}
            finalists={finalists}
            winner={winner}
          />
        </div>
      )}

      {isLoggedIn && isBracket === 'bets' && (
        <div className="navbar">
          <Navbar isBracketHandler={isBracketHandler} />
          <Bets />
        </div>
      )}
    </div>
  );
};

export default App;
