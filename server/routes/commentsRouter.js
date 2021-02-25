const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  // return all categories
  const comments = req.body.id;
  console.log(comments);
  console.log('Getting Comments..');
  const query = `SELECT * FROM "forum_comments"
                    WHERE thread_id = $1`;
  pool
    .query(query, [comments])
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
  const comment = req.body.comments;
  const threadId = req.body.threadId;
  console.log(comment);
  console.log(threadId);
  console.log('Adding Comment..');
  const query = `INSERT INTO "forum_comments" (text, author_id, timestamp, thread_id)
    VALUES ($1, $2, NOW(), $3)`;
  pool
    .query(query, [comment.text, comment.author, threadId])
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