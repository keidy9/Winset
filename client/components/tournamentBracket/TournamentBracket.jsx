import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams, getPlayers } from '../../state/teamSlice';
import MatchBox from './MatchBox';

const TournamentBracket = () => {
  const dispatch = useDispatch();
  const teamsArray = useSelector(({ teamReducer }) => teamReducer.teams);
  const playersArray = useSelector(({ teamReducer }) => teamReducer.players);
  // console.log(teamsArray);
  const [teams, setTeams] = useState(teamsArray);
  const [players, setPlayers] = useState(playersArray);
  // const [players, setPlayers] = useState(
  //   useSelector((teamReducer) => teamReducer.players)
  // );

  useEffect(() => {
    fetchTeams();
    fetchPlayers();
  }, []);

  useEffect(() => {
    setTeams(teamsArray);
    setPlayers(playersArray);
  }, [teamsArray, playersArray]);

  const fetchTeams = async () => {
    const response = await fetch(`http://localhost:3000/teams`);
    const data = await response.json();
    const shuffledData = shuffleArray(data.slice());
    console.log('shuffled', shuffledData);
    console.log(shuffledData);
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

  return (
    // <div className="bracket-container">
    //   <div className="bracket-qf">
    //     <div className='vertical'></div>
    //     <div className="match-box-qf">
    //       <MatchBox firstTeam={teams[0]} secondTeam={teams[1]} matchNum={1} />
    //     </div>
    //     <div className="match-box-qf">
    //       <MatchBox firstTeam={teams[2]} secondTeam={teams[3]} matchNum={2} />
    //     </div>
    //     <div className="match-box-qf">
    //       <MatchBox firstTeam={teams[4]} secondTeam={teams[5]} matchNum={3} />
    //     </div>
    //     <div className="match-box-qf">
    //       <MatchBox firstTeam={teams[6]} secondTeam={teams[7]} matchNum={4} />
    //     </div>
    //   </div>
    //   <div className="bracket-sf">
    //     <div className="match-box-sf">
    //       <MatchBox firstTeam={teams[0]} secondTeam={teams[1]} matchNum={5} />
    //     </div>
    //     <div className="match-box-sf">
    //       <MatchBox firstTeam={teams[0]} secondTeam={teams[1]} matchNum={6} />
    //     </div>
    //   </div>
    //   <div className="bracket-f">
    //     <div className="match-box-sf">
    //       <MatchBox firstTeam={teams[0]} secondTeam={teams[1]} matchNum={7} />
    //     </div>
    //   </div>
    // </div>

    /**
     * CREDIT FOR TOURNAMENT BRACKET GOES TO Serhii Dudnyk AT: https://codepen.io/sdudnyk/pen/bWbqMb
     */

    <div className="wrapper">
      <div className="item">
        <div className="item-parent">
          <p>winner</p>
        </div>
        <div className="item-childrens">
          <div className="item-child">
            <div className="item">
              <div className="item-parent">
                <p>finalist</p>
              </div>
              <div className="item-childrens">
                <div className="item-child">
                  <div className="item">
                    <div className="item-parent">
                      <p>semifinalist</p>
                    </div>
                    <div className="item-childrens">
                      <div className="item-child">
                        <p>{teams[0].name}</p>
                      </div>
                      <div className="item-child">
                        <p>{teams[1].name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item-child">
                  <div className="item">
                    <div className="item-parent">
                      <p>semifinalist</p>
                    </div>
                    <div className="item-childrens">
                      <div className="item-child">
                        <p>{teams[2].name}</p>
                      </div>
                      <div className="item-child">
                        <p>{teams[3].name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-child">
            <div className="item">
              <div className="item-parent">
                <p>finalist</p>
              </div>
              <div className="item-childrens">
                <div className="item-child">
                  <div className="item">
                    <div className="item-parent">
                      <p>semifinalist</p>
                    </div>
                    <div className="item-childrens">
                      <div className="item-child">
                        <p>{teams[4].name}</p>
                      </div>
                      <div className="item-child">
                        <p>{teams[5].name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item-child">
                  <div className="item">
                    <div className="item-parent">
                      <p>semifinalist</p>
                    </div>
                    <div className="item-childrens">
                      <div className="item-child">
                        <p>{teams[6].name}</p>
                      </div>
                      <div className="item-child">
                        <p>{teams[7].name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentBracket;
