import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUsers() {
    try {
        const usersResponse = yield axios.get('/api/user/allusers');
        yield put({ type: 'SET_USERS', payload: usersResponse.data});
    } catch (error) {
        console.log(`Error fetching users`, error);
    }
}

function* allusersSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers);
}

export default allusersSaga;
