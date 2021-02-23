require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const forumRouter = require('./routes/forumRouter');
const userRouter = require('./routes/userRouter');
const threadRouter = require('./routes/threadRouter');
const commentsRouter = require('./routes/commentsRouter');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/forum', forumRouter);
app.use('/api/user', userRouter);
app.use('/api/threads', threadRouter);
app.use('/api/comments', commentsRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});