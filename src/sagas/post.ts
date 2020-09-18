import { call, put } from "redux-saga/effects";
import PostService from "../services/PostService";

function* fetchPosts() {
	try {
		const posts = yield call(PostService.fetchPosts);
		yield put({ type: "POSTS_FETCH_SUCCEEDED", posts });
	} catch (e) {
		yield put({ type: "POSTS_FETCH_FAILED", message: e.message });
	}
}

export { fetchPosts };
