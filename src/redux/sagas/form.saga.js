import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchForumCategories() {
    try {
        const categoriesResponse = yield axios.get('/api/forum');
        yield put({ type: 'SET_CATEGORIES', payload: categoriesResponse.data});
    } catch (error) {
        console.log(`Error fetching categories`, error);
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

function* addThread(action) {
    try {
        console.log(action.payload);
        const threadResponse = yield axios.post('/api/threads/add', {thread: action.payload});
        yield put({ type: 'SET_THREADS', payload: threadResponse.data.category_id});
    } catch (error) {
        console.log(`Error adding thread`, error);
    }
}

function* loginSaga() {
    yield takeEvery('FETCH_CATEGORIES', fetchForumCategories);
    yield takeEvery('FETCH_THREADS', fetchThreads);
    yield takeEvery('FETCH_COMMENTS', fetchComments);
    yield takeEvery('ADD_THREAD', addThread);
}

export default loginSaga;