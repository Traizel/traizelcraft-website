import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addEvent(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/events', {event: action.payload});
        yield put({ type: 'GET_EVENTS' });
    } catch (error) {
        console.log(`Error adding event`, error);
    }
}

function* fetchEvents() {
    try {
        const eventResponse = yield axios.get('/api/events');
        yield put({ type: 'SET_EVENTS', payload: eventResponse.data});
    } catch (error) {
        console.log(`Error fetching events`, error);
    }
}

function* fetchDetails(action) {
    try {
        const detailsResponse = yield axios.post('/api/events/getdetails', {event: action.payload});
        yield put({ type: 'SET_DETAILS', payload: detailsResponse.data});
    } catch (error) {
        console.log(`Error fetching details`, error);
    }
}

function* fetchSessionDetails() {
    try {
        const detailsResponse = yield axios.post('/api/events/getsessiondetails');
        yield put({ type: 'SET_DETAILS', payload: detailsResponse.data.details});
    } catch (error) {
        console.log(`Error fetching details`, error);
    }
}

function* getSignUp(action) {
    try {
        console.log(action.payload);
        const signUpResponse = yield axios.post('/api/events/getsignups', {event: action.payload});
        yield put({ type: 'SET_SIGN_UP', payload: signUpResponse.data});
    } catch (error) {
        console.log(`Error adding event`, error);
    }
}

function* signUp(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/events/signup', {signup: action.payload});
    } catch (error) {
        console.log(`Error adding signup`, error);
    }
}

function* fetchSessionSignups() {
    try {
        const detailsResponse = yield axios.post('/api/events/getsessionsignups');
        yield put({ type: 'SET_SIGN_UP', payload: detailsResponse.data.signups});
    } catch (error) {
        console.log(`Error fetching signups`, error);
    }
}

function* deleteEvent(action) {
    try {
        console.log(action.payload);
        yield axios.delete(`/api/events/signup/${action.payload}`);
        yield axios.delete(`/api/events/${action.payload}`);
    } catch (error) {
        console.log(`Error deleting event`, error);
    }
}

function* eventSaga() {
    yield takeEvery('ADD_EVENT', addEvent);
    yield takeEvery('GET_EVENTS', fetchEvents);
    yield takeEvery('GET_SIGN_UP', getSignUp);
    yield takeEvery('SIGN_UP', signUp);
    yield takeEvery('DELETE_EVENT', deleteEvent);
    yield takeEvery('GET_DETAILS', fetchDetails);
    yield takeEvery('GET_SESSION_DETAILS', fetchSessionDetails);
    yield takeEvery('GET_SESSION_SIGN_UP', fetchSessionSignups);
}

export default eventSaga;