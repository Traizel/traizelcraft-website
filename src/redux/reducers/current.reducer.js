import { combineReducers } from 'redux';

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

const CurrentSignUpReducer = (state = 0, action) => {
   if (action.type === 'SET_CURRENT_SIGN_UP') {
        return action.payload;
    }
    return state;
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
    CurrentCategoryReducer,
    CurrentThreadReducer,
    CurrentSignUpReducer,
});
