const db = require('../db/index.js');

const getTeams = (req, res, next) => {
  const sqlQuery = 'SELECT * FROM teams';
  db.query(sqlQuery)
    .then((response) => {
        console.log(response.rows)
      res.locals.teams = response.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'An error occured in the getTeams controller',
        status: 500,
        message: {
          err: 'Unable to fetch teams',
        },
      });
    });
};

const getPlayers = (req, res, next) => {
  const sqlQuery = 'SELECT p.*, t.name AS team FROM players AS p LEFT JOIN teams AS t ON p.team_id = t._id';
  db.query(sqlQuery)
    .then((response) => {
        console.log(response.rows)
      res.locals.teams = response.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'An error occured in the getTeams controller',
        status: 500,
        message: {
          err: 'Unable to fetch teams',
        },
      });
    });
};

module.exports = {
  getTeams,
  getPlayers
};
