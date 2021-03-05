const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', rejectUnauthenticated, (req, res) => {
  const event = req.body.event;
  console.log('New event incoming:', event);

  const queryText = `INSERT INTO "event" (title, description, start_time, start_date, author_id)
    VALUES ($1, $2, $3, $4, $5)`;
  pool
    .query(queryText, [event.title, event.description, event.time, event.day, event.author])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Event creation failed: ', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.access_level >= 1) {
  const id = req.params.id;
  console.log('Delete event with id:', id);

  const queryText = `DELETE FROM "event"
    WHERE id = $1`;
  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Event delete failed: ', err);
      res.sendStatus(500);
    });
    } else {
      res.sendStatus(403);
    }
});

router.delete('/signup/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.access_level >= 1) {
  const id = req.params.id;
  console.log('Delete signups with id:', id);

  const queryText = `DELETE FROM "signups"
    WHERE event_id = $1`;
  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Signups delete failed: ', err);
      res.sendStatus(500);
    });
    }
});

router.get('/', rejectUnauthenticated, (req, res) => {
  // return all categories
  console.log('Getting Events..');
  const query = `SELECT * FROM event`;
  pool
    .query(query)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post('/getsignups', rejectUnauthenticated, (req, res) => {
    if (req.user.access_level >= 1) {
  const currentEvent = req.body.event;
  // return all categories
  console.log('Getting Sign Up Event..');
  const query = `SELECT * FROM event WHERE id = $1`;
  pool
    .query(query, [currentEvent])
    .then((result) => {
      console.log(result.rows);
      req.session.signups = req.session.signups || 'n/a';
      req.session.signups = result.rows;
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
    }
});

router.post('/getsessionsignups', rejectUnauthenticated, (req, res) => {
    if (req.user.access_level >= 1) {
  req.session.signups = req.session && req.session.signups || 0;
  const {signups} = req.session;
  res.send({signups});
    }
});

router.post('/signup', rejectUnauthenticated, (req, res) => {
  const signup = req.body.signup;
  console.log('New signup incoming:', signup);

  const queryText = `INSERT INTO "signups" (discord_name, in_game_name, event_id, user_id)
    VALUES ($1, $2, $3, $4)`;
  pool
    .query(queryText, [signup.discord, signup.inGame, signup.event, signup.user])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Signup creation failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/getdetails', rejectUnauthenticated, (req, res) => {
    if (req.user.access_level >= 1) {
  const currentEvent = req.body.event;
  // return all categories
  console.log('Getting Sign Up Event..');
  const query = `SELECT * FROM signups WHERE event_id = $1`;
  pool
    .query(query, [currentEvent])
    .then((result) => {
      console.log(result.rows);
      req.session.details = req.session.details || 'n/a';
      req.session.details = result.rows;
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
    }
});

router.post('/getsessiondetails', rejectUnauthenticated, (req, res) => {
    if (req.user.access_level >= 1) {
  req.session.details = req.session && req.session.details || 0;
  const {details} = req.session;
  res.send({details});
    }
});


module.exports = router;