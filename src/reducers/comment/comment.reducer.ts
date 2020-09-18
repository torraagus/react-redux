import { ICommentState, IAction } from "../comment/interfaces";

const INITIAL_STATE = { comments: [], error: null, loading: true };

const commentReducer = (state: ICommentState = INITIAL_STATE, action: IAction) => {
	switch (action.type) {
		case "COMMENTS_FETCH_SUCCEEDED":
			return { ...state, comments: [...action.comments], loading: false };
		case "COMMENTS_FETCH_FAILED":
			return { ...state, error: action.message, loading: false };
		default:
			return state;
	}
};

export default commentReducer;
