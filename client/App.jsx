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
import { updateBets } from './state/userSlice.js';

const App = () => {
  const isLoggedIn = useSelector(({ userReducer }) => userReducer.isLoggedIn);
  const bets = useSelector(({ userReducer }) => userReducer.bets);
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
  const [odds, setOdds] = useState({});

  /** HISTORIC INFORMATIONAL STATES */
  const [quarterfinalPointsObj, setQuarterfinalPointsObj] = useState([]);
  const [semifinalPointsObj, setSemifinalPointsObj] = useState([]);
  const [finalsPointsObj, setFinalsPointsObj] = useState([]);
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
    calc();
  }, [teamsArray, playersArray, teams, players]);

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
      if (teamPointsObj[player.team]) {
        const points = getRandomPoints(player.tier);
        teamPointsObj[player.team].points += points;
        teamPointsObj[player.team].players[player.name] = {
          player: player.name,
          tier: player.tier,
          points: points,
        };
      }
    });
    console.log('teamPoints:', teamPointsObj);
    setGamesObj((prevState) => {
      prevState[phase] = teamPointsObj;
      return prevState;
    });
    let teamsCopyCopy = [...teamsCopy];
    for (let i = 0; i < teamsCopyCopy.length; ++i) {
      console.log(i);
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
    console.log('teamscopy', teamsCopy);
    setTeamPointsObj([]);
    // FOR QUARTERFINALS
    if (phase === 'quarterfinals') {
      setSemiFinalists(teamsCopyCopy);
      dispatch(updateBets(teamsCopyCopy));
      setQuarterfinalPointsObj(teamPointsObj);
      setPhase('semifinals');
    }
    // FOR SEMIFINALS
    else if (phase === 'semifinals') {
      setFinalists(teamsCopyCopy);
      dispatch(updateBets(teamsCopyCopy));
      setSemifinalPointsObj(teamPointsObj);
      setPhase('finals');
    }
    //FOR FINALS
    else if (phase === 'finals') {
      setWinner(teamsCopyCopy);
      dispatch(updateBets(teamsCopyCopy));
      setFinalsPointsObj(teamPointsObj);
      setPhase('done');
    }
  };

  /** RESET TOURNAMENT BRACKET LOGIC */
  const reset = () => {
    const newShuffledTeams = shuffleArray(teams.slice());
    dispatch(getTeams(newShuffledTeams));
    setTeamsCopy(teamsArray);
    setTeamPointsObj([]);
    setPlayerPointsObj([]);
    setPhase('quarterfinals');
    setGamesObj({});
    setQuarterfinalPointsObj([]);
    setSemifinalPointsObj([]);
    setFinalsPointsObj([]);
    setSemiFinalists([]);
    setFinalists([]);
    setWinner([]);
    setOdds({});
  };

  /** CALCULATE ODDS LOGIC */
  const calc = () => {
    teams.forEach((team) => {
      odds[team.name] = 0;
    });
    players.forEach((player) => {
      odds[player.team] += player.tier;
    });
    console.log(odds);
  };

  return (
    <div>
      {/* SIGN UP/LOGIN __________________________________________________ */}
      {!isLoggedIn ? (
        <div className='signup-page'>
          <div className='signup-with-button-container'>
          <Signup isSignUp={isSignUp} />
          <p className='switch-login-mode'
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp ? 'Have an account already? Login here!' : 'Don\'t have an account yet? Sign up here!'}
          </p>
          </div>
        </div>
      ) : (
        ''
      )}

      {/* MAIN APP __________________________________________________ */}
      {isLoggedIn && isBracket === 'bracket' && (
        <>
          <div className="navbar">
            <Navbar isBracketHandler={isBracketHandler} />
          </div>
          <div className="tournament-bracket-container">
            <TournamentBracket
              teams={teams}
              reset={reset}
              fastForward={fastForward}
              quarterfinalPointsObj={quarterfinalPointsObj}
              semifinalPointsObj={semifinalPointsObj}
              finalsPointsObj={finalsPointsObj}
              semiFinalists={semiFinalists}
              finalists={finalists}
              winner={winner}
            />
          </div>
        </>
      )}

      {isLoggedIn && isBracket === 'bets' && (
        <>
          <div className="navbar">
            <Navbar isBracketHandler={isBracketHandler} />
          </div>
          <div className="bets-page">
            <div className="bets-container">
              <Bets
                teamsCopy={teamsCopy}
                odds={odds}
                phase={phase}
                semiFinalists={semiFinalists}
                finalists={finalists}
                winner={winner}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
