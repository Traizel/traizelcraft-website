const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  // return all threads
  const category = req.body.id;
  console.log(category);
  console.log('Getting Threads..');
  const query = `SELECT * FROM "forum_thread"
                    WHERE category_id = $1`;
  pool
    .query(query, [category])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post('/add', (req, res) => {
  // add new thread
  const thread = req.body.thread;
  console.log(thread);
  console.log('Adding Thread..');
  const query = `INSERT INTO "forum_thread" (title, views, author_id, timestamp, category_id)
    VALUES ($1, 0, $2, NOW(), $3)`;
  pool
    .query(query, [thread.subject, thread.author, thread.category])
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