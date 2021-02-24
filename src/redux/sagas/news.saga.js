import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addNews(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/news', {news: action.payload});
        yield put({ type: 'GET_NEWS' });
    } catch (error) {
        console.log(`Error adding news`, error);
    }
}

function* fetchNews() {
    try {
        const eventResponse = yield axios.get('/api/news');
        yield put({ type: 'SET_NEWS', payload: eventResponse.data});
    } catch (error) {
        console.log(`Error fetching news`, error);
    }
}

function* newsSaga() {
    yield takeEvery('ADD_NEWS', addNews);
    yield takeEvery('GET_NEWS', fetchNews);
}

export default newsSaga;