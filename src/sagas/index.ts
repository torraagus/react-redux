import { all, takeLatest } from "redux-saga/effects";
import { fetchPosts } from "./post";
import { fetchPostComments } from "./comment";

function* watchAll() {
	yield all([
		takeLatest("POSTS_FETCH_REQUESTED", fetchPosts),
		takeLatest("COMMENTS_FETCH_REQUESTED", fetchPostComments),
	]);
}

export default watchAll;
