import { call, put, delay } from "redux-saga/effects";
import PostService from "../services/PostService";
import { IAction } from "../reducers/post/interfaces";

function* fetchPostComments(action: IAction) {
	yield put({ type: "START_LOADING_BAR" });
	yield put({ type: "FETCHING_COMMENTS" });
	try {
		yield delay(500);
		const comments = yield call(PostService.fetchPostComments, action.postId);
		yield put({ type: "COMMENTS_FETCH_SUCCEEDED", comments });
		yield put({ type: "FULL_LOADING_BAR" });
	} catch (e) {
		yield put({ type: "COMMENTS_FETCH_FAILED", message: e.message });
	}
}

export { fetchPostComments };
