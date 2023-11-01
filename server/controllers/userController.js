const db = require('../db/index.js');

const createUser = async (req, res, next) => {
    console.log(req.body)
  const { username, password } = req.body;
  const sqlQuery =
    'INSERT INTO users (username, password, total_cash) VALUES ($1, $2, 0) RETURNING *';
  db.query(sqlQuery, [username, password])
    .then((response) => {
      console.log(response.rows[0]);
      res.locals.newUser = response.rows[0];
      return next();
    })
    .catch((error) => {
      console.log(error);
      return next({
        log: 'An error occured in the createUser controller',
        status: 400,
        message: {
          err: 'Unable to create new user',
        },
      });
    });
};

const getUser = (req, res, next) => {
  const { username, password } = req.body;
  const sqlQuery = 'SELECT * FROM users WHERE username = $1 AND password = $2';
  db.query(sqlQuery, [username, password])
    .then((response) => {
      res.locals.user = response.rows[0];
      return next();
    })
    .catch((error) => {
      console.log(error);
      return next({
        log: 'An error occured in the getUser controller',
        status: 400,
        message: {
          err: 'Unable to fetch user',
        },
      });
    });
};

module.exports = {
  createUser,
  getUser,
};
