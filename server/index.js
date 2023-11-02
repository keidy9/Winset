const express = require('express');
const path = require('path');
const cors = require('cors');

const userController = require('./controllers/userController.js');
const teamsController = require('./controllers/teamsController.js');

// Server setup
const app = express();
const PORT = 3000;

// Parsing logic
app.use(express.json());
app.use(express.urlencoded());
/**
 *  Sets request options, without this the CORS preflight check does not pass,
 *  and if it does pass then the request body will be empty even if you sent your
 *  request with a body
 *  */
app.options('/signup', cors()); // make sure to add cors() as a middleware to your route!
app.options('/login', cors()); // make sure to add cors() as a middleware to your route!
app.options('/teams', cors()); // make sure to add cors() as a middleware to your route!
app.options('/players', cors()); // make sure to add cors() as a middleware to your route!
app.options('/logout', cors()); // make sure to add cors() as a middleware to your route!
// ????
app.use(express.static('dist'));

// FACT: 99% of gamblers quit right before they hit it big
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// Signup route
app.post('/signup', cors(), userController.createUser, (req, res) => {
  console.log('signup');
  res.status(200).json(res.locals.newUser);
});

// Login route
app.post('/login', cors(), userController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

// Logout route
app.post('/logout', cors(), userController.updateUser, (req, res) => {
  res.status(200).send('updated user');
});

// Fetch teams route
app.get('/teams', cors(), teamsController.getTeams, (req, res) => {
  res.status(200).json(res.locals.teams);
});

// Fetch players route
app.get('/players', cors(), teamsController.getPlayers, (req, res) => {
  res.status(200).json(res.locals.teams);
});

// Invalid route handler
app.use('/', (req, res) => {
  console.log('invalid route');
  res.status(404).send('error: not found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.log('global error handler triggered');
  const defaultErrorObj = {
    log: 'An error occured in unknown middleware',
    status: 500,
    message: { err: 'an error occured' },
  };
  const errorObj = Object.assign({}, defaultErrorObj, err);
  res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
