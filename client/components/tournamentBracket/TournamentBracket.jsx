import React from 'react';

// CREDIT FOR TOURNAMENT BRACKET GOES TO Serhii Dudnyk, https://codepen.io/sdudnyk/pen/bWbqMb

const TournamentBracket = ({
  teams,
  fastForward,
  phase,
  semiFinalists,
  finalists,
  winner,
}) => {
  return (
    <>
      <div className="bracket-buttons-container">
        <button className="reset-button">RESET</button>
        <button className="fast-forward-button" onClick={fastForward}>
          FAST FORWARD
        </button>
      </div>
      <div className="wrapper">
        <div className="item">
          <div className="item-parent">
            {winner[0] ? <p>{winner[0].name}</p> : <p>winner</p>}
          </div>
          <div className="item-childrens">
            <div className="item-child">
              <div className="item">
                <div className="item-parent">
                  {finalists[0] ? <p>{finalists[0].name}</p> : <p>finals</p>}
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <div className="item">
                      <div className="item-parent">
                        {semiFinalists[0] ? (
                          <p>{semiFinalists[0].name}</p>
                        ) : (
                          <p>semifinals</p>
                        )}
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
                        {semiFinalists[0] ? (
                          <p>{semiFinalists[1].name}</p>
                        ) : (
                          <p>semifinals</p>
                        )}
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
                  {finalists[0] ? <p>{finalists[1].name}</p> : <p>finals</p>}
                </div>
                <div className="item-childrens">
                  <div className="item-child">
                    <div className="item">
                      <div className="item-parent">
                        {semiFinalists[0] ? (
                          <p>{semiFinalists[2].name}</p>
                        ) : (
                          <p>semifinals</p>
                        )}
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
                        {semiFinalists[0] ? (
                          <p>{semiFinalists[3].name}</p>
                        ) : (
                          <p>semifinals</p>
                        )}
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
    </>
  );
};

export default TournamentBracket;
