import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addCurrentEvent(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/current/event', {event: action.payload});
    } catch (error) {
        console.log(`Error adding current event`, error);
    }
}

function* fetchCurrentEvent() {
    try {
        const eventResponse = yield axios.get('/api/current/event');
        yield put({ type: 'SET_CURRENT_EVENT', payload: eventResponse.data.event});
    } catch (error) {
        console.log(`Error fetching current event`, error);
    }
}

function* addCurrentThread(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/current/thread', {thread: action.payload});
    } catch (error) {
        console.log(`Error adding current thread`, error);
    }
}

function* fetchCurrentThread() {
    try {
        const threadResponse = yield axios.get('/api/current/thread');
        yield put({ type: 'SET_CURRENT_THREAD', payload: threadResponse.data.thread});
    } catch (error) {
        console.log(`Error fetching current thread`, error);
    }
}

function* addCurrentCategory(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/current/category', {category: action.payload});
    } catch (error) {
        console.log(`Error adding current category`, error);
    }
}

function* fetchCurrentCategory() {
    try {
        const categoryResponse = yield axios.get('/api/current/category');
        yield put({ type: 'SET_CURRENT_CATEGORY', payload: categoryResponse.data.category});
    } catch (error) {
        console.log(`Error fetching current category`, error);
    }
}

function* currentSaga() {
    yield takeEvery('ADD_CURRENT_EVENT', addCurrentEvent);
    yield takeEvery('ADD_CURRENT_THREAD', addCurrentThread);
    yield takeEvery('ADD_CURRENT_CATEGORY', addCurrentCategory);
    yield takeEvery('GET_CURRENT_EVENT', fetchCurrentEvent);
    yield takeEvery('GET_CURRENT_THREAD', fetchCurrentThread);
    yield takeEvery('GET_CURRENT_CATEGORY', fetchCurrentCategory);
}

export default currentSaga;