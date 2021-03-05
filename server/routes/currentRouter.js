const express = require('express');

const router = express.Router();

router.post('/event', (req,res) => {
  console.log(req.body.event);
  // This is defensive code
  // It is checking req.session.totalClicks to see if it exists. If so, use that number. If not, use n/a
  req.session.event = req.session.event || 'n/a';
  req.session.event = req.body.event;
  res.sendStatus(200);
});

router.get('/event', (req, res) => {
  req.session.event = req.session && req.session.event || 0;
  const {event} = req.session;
  res.send({event});
});

router.post('/thread', (req,res) => {
  console.log(req.body.thread);
  // This is defensive code
  // It is checking req.session.thread to see if it exists. If so, use that number. If not, use n/a
  req.session.thread = req.session.thread || 'n/a';
  req.session.thread = req.body.thread;
  res.sendStatus(200);
});

router.get('/thread', (req, res) => {
  req.session.thread = req.session && req.session.thread || 0;
  const {thread} = req.session;
  res.send({thread});
});

router.post('/category', (req,res) => {
  console.log(req.body.category);
  // This is defensive code
  // It is checking req.session.totalClicks to see if it exists. If so, use that number. If not, use n/a
  req.session.category = req.session.category || 'n/a';
  req.session.category = req.body.category;
  res.sendStatus(200);
});

router.get('/category', (req, res) => {
  req.session.category = req.session && req.session.category || 0;
  const {category} = req.session;
  res.send({category});
});


module.exports = router;