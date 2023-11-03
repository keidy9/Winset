import React from 'react';

// CREDIT FOR TOURNAMENT BRACKET GOES TO Serhii Dudnyk, https://codepen.io/sdudnyk/pen/bWbqMb

const TournamentBracket = ({
  teams,
  reset,
  fastForward,
  quarterfinalPointsObj,
  semifinalPointsObj,
  finalsPointsObj,
  semiFinalists,
  finalists,
  winner,
}) => {
  console.log('semifinals', semifinalPointsObj);
  return (
    <>
      <div className="bracket-buttons-container">
        <button className="reset-button" onClick={reset}>
          RESET 🔄
        </button>
        <button className="fast-forward-button" onClick={fastForward}>
          FAST FORWARD ⏩
        </button>
      </div>
      <div className="wrapper">
        <div className="item">
          <div className="item-parent">
            {winner[0] ? <p className='yes-team'>{winner[0].name}</p> : <p className='no-team'>winner</p>}
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  {finalists[0] ? <p className='yes-team'>{finalists[0].name}</p> : <p className='no-team'>finals</p>}
                  {finalists[0] && finalsPointsObj[finalists[0].name] ? (
                    <p className="points-box" >
                      {finalsPointsObj[finalists[0].name].points}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <div className="item">
                      <div className="item-parent">
                        {semiFinalists[0] ? (
                          <p className='yes-team'>{semiFinalists[0].name}</p>
                        ) : (
                          <p className='no-team'>semifinals</p>
                        )}
                              {semiFinalists[0] &&
                          semifinalPointsObj[semiFinalists[0].name] ? (
                            <p className="points-box">
                              {
                                semifinalPointsObj[semiFinalists[0].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                      </div>
                      <div className="item-childrens">
                        <div className="item-child">
                          <p className='yes-team'>{teams[0].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[0].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[0].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="item-child">
                          <p className='yes-team'>{teams[1].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[1].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[1].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-child">
                    <div className="item">
                      <div className="item-parent">
                        {semiFinalists[0] ? (
                          <p className='yes-team'>{semiFinalists[1].name}</p>
                        ) : (
                          <p className='no-team'>semifinals</p>
                        )}
                              {semiFinalists[0] &&
                          semifinalPointsObj[semiFinalists[1].name] ? (
                            <p className="points-box">
                              {
                                semifinalPointsObj[semiFinalists[1].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                      </div>
                      <div className="item-childrens">
                        <div className="item-child">
                          <p className='yes-team'>{teams[2].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[2].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[2].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="item-child">
                          <p className='yes-team'>{teams[3].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[3].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[3].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
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
                  {finalists[0] ? <p className='yes-team'>{finalists[1].name}</p> : <p className='no-team'>finals</p>}
                  {finalists[0] && finalsPointsObj[finalists[0].name] ? (
                    <p className="points-box">
                      {finalsPointsObj[finalists[0].name].points}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <div className="item">
                      <div className="item-parent">
                        {semiFinalists[0] ? (
                          <p className='yes-team'>{semiFinalists[2].name}</p>
                        ) : (
                          <p className='no-team'>semifinals</p>
                        )}
                        {semiFinalists[0] &&
                          semifinalPointsObj[semiFinalists[2].name] ? (
                            <p className="points-box">
                              {
                                semifinalPointsObj[semiFinalists[2].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                      </div>
                      <div className="item-childrens">
                        <div className="item-child">
                          <p className='yes-team'>{teams[4].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[4].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[4].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="item-child">
                          <p className='yes-team'>{teams[5].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[5].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[5].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-child">
                    <div className="item">
                      <div className="item-parent">
                        {semiFinalists[0] ? (
                          <p className='yes-team'>{semiFinalists[3].name}</p>
                        ) : (
                          <p className='no-team'>semifinals</p>
                        )}
                        {semiFinalists[0] &&
                          semifinalPointsObj[semiFinalists[3].name] ? (
                            <p className="points-box">
                              {
                                semifinalPointsObj[semiFinalists[3].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                      </div>
                      <div className="item-childrens">
                        <div className="item-child">
                          <p className='yes-team'>{teams[6].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[6].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[6].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="item-child">
                          <p className='yes-team'>{teams[7].name}</p>
                          {semiFinalists[0] &&
                          quarterfinalPointsObj[teams[7].name] ? (
                            <p className="points-box">
                              {
                                quarterfinalPointsObj[teams[7].name]
                                  .points
                              }
                            </p>
                          ) : (
                            ''
                          )}
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
    </>
  );
};

export default TournamentBracket;
