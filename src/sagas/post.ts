import { call, put, delay } from "redux-saga/effects";
import PostService from "../services/PostService";

function* fetchPosts() {
	yield put({ type: "START_LOADING_BAR" });
	try {
		yield delay(1000);
		const posts = yield call(PostService.fetchPosts);
		yield put({ type: "POSTS_FETCH_SUCCEEDED", posts });
		yield put({ type: "FULL_LOADING_BAR" });
	} catch (e) {
		yield put({ type: "POSTS_FETCH_FAILED", message: e.message });
	}
}

export { fetchPosts };
