import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchForumCategories() {
    try {
        const categoriesResponse = yield axios.get('/api/forum');
        yield put({ type: 'SET_CATEGORIES', payload: categoriesResponse.data});
    } catch (error) {
        console.log(`Error fetching categories`, error);
    }
}

function* fetchUsers() {
    try {
        const usersResponse = yield axios.get('/api/users');
        yield put({ type: 'SET_USERS', payload: usersResponse.data});
    } catch (error) {
        console.log(`Error fetching users`, error);
    }
}

function* fetchThreads(action) {
    try {
        console.log(action.payload);
        const threadsResponse = yield axios.post('/api/threads', {id: action.payload});
        yield put({ type: 'SET_THREADS', payload: threadsResponse.data});
    } catch (error) {
        console.log(`Error fetching threads`, error);
    }
}

function* fetchComments(action) {
    try {
        console.log(action.payload);
        const commentsResponse = yield axios.post('/api/comments', {id: action.payload});
        yield put({ type: 'SET_COMMENTS', payload: commentsResponse.data});
    } catch (error) {
        console.log(`Error fetching comments`, error);
    }
}

// worker Saga: will be fired on "LOGIN" actions
function* loginUser(action) {
  try {
    // clear any existing error on the login page
    yield put({ type: 'CLEAR_LOGIN_ERROR' });

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/users/login', action.payload, config);

    // after the user has logged in
    // get the user information from the server
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('Error with user login:', error);
    if (error.response.status === 401) {
      // The 401 is the error status sent from passport
      // if user isn't in the database or
      // if the username and password don't match in the database
      yield put({ type: 'LOGIN_FAILED' });
    } else {
      // Got an error that wasn't a 401
      // Could be anything, but most common cause is the server is not started
      yield put({ type: 'LOGIN_FAILED_NO_CODE' });
    }
  }
}

// worker Saga: will be fired on "LOGOUT" actions
function* logoutUser(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // when the server recognizes the user session
    // it will end the session
    yield axios.post('/api/user/logout', config);

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out
    yield put({ type: 'UNSET_USER' });
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    yield axios.post('/api/users/register', action.payload);

    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/users', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('FETCH_CATEGORIES', fetchForumCategories);
    yield takeEvery('FETCH_USERS', fetchUsers);
    yield takeEvery('FETCH_THREADS', fetchThreads);
    yield takeEvery('FETCH_COMMENTS', fetchComments);
    yield takeLatest('LOGIN', loginUser);
    yield takeLatest('LOGOUT', logoutUser);
    yield takeLatest('FETCH_USER', fetchUser);
    yield takeLatest('REGISTER', registerUser);
}

const ForumCategoriesReducer = (state = [], action) => {
   if (action.type === 'SET_CATEGORIES') {
        return action.payload;
    }
    return state;
};

const ForumThreadsReducer = (state = [], action) => {
   if (action.type === 'SET_THREADS') {
        return action.payload;
    }
    return state;
};

const GetUsersReducer = (state = [], action) => {
   if (action.type === 'SET_USERS') {
        return action.payload;
    }
    return state;
};

const ForumCommentsReducer = (state = [], action) => {
   if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
};

const CurrentCategoryReducer = (state = 0, action) => {
   if (action.type === 'SET_CURRENT_CATEGORY') {
        return action.payload;
    }
    return state;
};

const CurrentThreadReducer = (state = 0, action) => {
   if (action.type === 'SET_CURRENT_THREAD') {
        return action.payload;
    }
    return state;
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

// loginMessage holds the string that will display
// on the login screen if there's an error
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Enter your username and password!';
    case 'LOGIN_FAILED':
      return "Oops! The username and password didn't match. Try again!";
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! The server may be offline.';
    default:
      return state;
  }
};

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose a username and password!';
    case 'REGISTRATION_FAILED':
      return "Oops! That didn't work. The username might already be taken. Try again!";
    default:
      return state;
  }
};

const storeInstance = createStore(
    combineReducers(
        {
            ForumCategoriesReducer,
            GetUsersReducer,
            CurrentCategoryReducer,
            ForumThreadsReducer,
            CurrentThreadReducer,
            ForumCommentsReducer,
            loginMessage,
            userReducer,
            registrationMessage,
        }
    ),
    // Tell redux that we want to use our new logger
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));