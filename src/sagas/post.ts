import { call, put, takeLatest } from "redux-saga/effects";
import PostService from "../services/PostService";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPosts() {
	try {
		const posts = yield call(PostService.fetchPosts);
		yield put({ type: "POSTS_FETCH_SUCCEEDED", posts });
	} catch (e) {
		yield put({ type: "POSTS_FETCH_FAILED", message: e.message });
	}
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* postSaga() {
	yield takeLatest("POSTS_FETCH_REQUESTED", fetchPosts);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
*/

export { fetchPosts };
