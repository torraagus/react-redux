import { call, put } from "redux-saga/effects";
import PostService from "../services/PostService";
import { IAction } from "../reducers/post/interfaces";

function* fetchPostComments(action: IAction) {
	try {
		const comments = yield call(PostService.fetchPostComments, action.postId);
		yield put({ type: "COMMENTS_FETCH_SUCCEEDED", comments });
	} catch (e) {
		yield put({ type: "COMMENTS_FETCH_FAILED", message: e.message });
	}
}

export { fetchPostComments };
