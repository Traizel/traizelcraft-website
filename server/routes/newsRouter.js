const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', rejectUnauthenticated, (req, res) => {
  if (req.user.access_level >= 3) {
  const news = req.body.news;
  console.log('New news incoming:', news);

  const queryText = `INSERT INTO "news" (title, description, timestamp, author_id, img_name, img_url)
    VALUES ($1, $2, NOW(), $3, $4, $5)`;
  pool
    .query(queryText, [news.title, news.description, news.author, news.img_name, news.img_url])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('News creation failed: ', err);
      res.sendStatus(500);
    });
  }
});

router.get('/', (req, res) => {
  // return all categories
  console.log('Getting News..');
  const query = `SELECT * FROM news
                ORDER BY timestamp DESC`;
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