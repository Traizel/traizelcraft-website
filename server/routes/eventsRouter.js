const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
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



module.exports = router;