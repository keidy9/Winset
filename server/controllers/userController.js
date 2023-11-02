const db = require('../db/index.js');

const createUser = async (req, res, next) => {
  console.log(req.body);
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

const updateUser = (req, res, next) => {
  const { total_cash, username } = req.body;
  const sqlQuery =
    'UPDATE users SET total_cash = $1 WHERE username = $2 RETURNING users.*';

  db.query(sqlQuery, [total_cash, username])
    .then((response) => {
      console.log(response.rows);
      return next();
    })
    .catch((error) => {
      console.log(error)
      return next({
        log: 'An error occured in the updateUser controller',
        status: 400,
        message: {
          err: 'Unable to update user',
        },
      });
    });

  // "_id" serial NOT NULL,
  // "username" varchar NOT NULL UNIQUE,
  // "password" varchar NOT NULL,
  //   "total_cash" bigint NOT NULL,
  // CONSTRAINT "users_pk" PRIMARY KEY ("_id")
};

module.exports = {
  createUser,
  getUser,
  updateUser
};
