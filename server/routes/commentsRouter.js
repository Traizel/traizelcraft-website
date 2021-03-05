const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  // return all categories
  const comments = req.body.id;
  console.log(comments);
  console.log('Getting Comments..');
  const query = `SELECT * FROM "forum_comments"
                    WHERE thread_id = $1
                    ORDER BY timestamp DESC`;
  pool
    .query(query, [comments])
    .then((result) => {
      console.log(result.rows);
      req.session.comments = req.session.comments || 'n/a';
      req.session.comments = result.rows;
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post('/getsessioncomments', (req, res) => {
  req.session.comments = req.session && req.session.comments || 0;
  const {comments} = req.session;
  res.send({comments});
});

router.post('/add', (req, res) => {
  // add new thread
  const comment = req.body.comments;
  console.log(comment);
  console.log('Adding Comment..');
  const query = `INSERT INTO "forum_comments" (text, author_id, timestamp, thread_id)
    VALUES ($1, $2, NOW(), $3)`;
  pool
    .query(query, [comment.comments.text, comment.comments.author, comment.threadId[0].id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post('/new', (req, res) => {
  // add new thread
  const comment = req.body.comment;
  console.log(comment);
  console.log('Adding Comment..');
  const query = `INSERT INTO "forum_comments" (text, author_id, timestamp, thread_id)
    VALUES ($1, $2, NOW(), $3)`;
  pool
    .query(query, [comment.text, comment.author, comment.thread])
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