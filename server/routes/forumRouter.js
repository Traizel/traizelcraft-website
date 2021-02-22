const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  console.log('Getting Categories..');
  const query = `SELECT * FROM forum_category`;
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