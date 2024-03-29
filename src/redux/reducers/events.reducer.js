import { combineReducers } from 'redux';

const getEvents = (state = [], action) => {
   if (action.type === 'SET_EVENTS') {
        return action.payload;
    }
    return state;
};

const getSignUp = (state = [], action) => {
   if (action.type === 'SET_SIGN_UP') {
        return action.payload;
    }
    return state;
};

const getDetails = (state = [], action) => {
   if (action.type === 'SET_DETAILS') {
        return action.payload;
    }
    return state;
};


// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
    getEvents,
    getSignUp,
    getDetails,
});