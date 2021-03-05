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
        let comment = {};
        console.log(action.payload);
        let threadResponse = yield axios.post('/api/threads/add', {thread: action.payload});
        yield comment = {
            threadId: threadResponse.data,
            comments: action.payload, 
        };
        yield axios.post('/api/comments/add', {comments: comment});
        yield put({ type: 'SET_THREADS', payload: threadResponse.data});
    } catch (error) {
        console.log(`Error adding thread`, error);
    }
}

function* fetchSessionThreads() {
    try {
        const detailsResponse = yield axios.post('/api/threads/getsessionthreads');
        yield put({ type: 'SET_THREADS', payload: detailsResponse.data.threads});
    } catch (error) {
        console.log(`Error fetching threads`, error);
    }
}

function* addComment(action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/comments/new', {comment: action.payload});
        yield put({ type: 'FETCH_COMMENTS', payload: action.payload.thread});
    } catch (error) {
        console.log(`Error adding thread`, error);
    }
}

function* fetchSessionComments() {
    try {
        const detailsResponse = yield axios.post('/api/comments/getsessioncomments');
        yield put({ type: 'SET_COMMENTS', payload: detailsResponse.data.comments});
    } catch (error) {
        console.log(`Error fetching comments`, error);
    }
}

function* loginSaga() {
    yield takeEvery('FETCH_CATEGORIES', fetchForumCategories);
    yield takeEvery('FETCH_THREADS', fetchThreads);
    yield takeEvery('FETCH_COMMENTS', fetchComments);
    yield takeEvery('ADD_THREAD', addThread);
    yield takeEvery('ADD_COMMENT', addComment);
    yield takeEvery('GET_SESSION_THREADS', fetchSessionThreads);
    yield takeEvery('GET_SESSION_COMMENTS', fetchSessionComments);
}

export default loginSaga;