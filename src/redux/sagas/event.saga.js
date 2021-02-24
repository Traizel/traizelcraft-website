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

function* eventSaga() {
    yield takeEvery('ADD_EVENT', addEvent);
    yield takeEvery('GET_EVENTS', fetchEvents);
}

export default eventSaga;