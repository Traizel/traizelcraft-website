import { combineReducers } from 'redux';

const ForumCommentsReducer = (state = [], action) => {
   if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
};

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


// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
    ForumCategoriesReducer,
    ForumThreadsReducer,
    ForumCommentsReducer,
});
