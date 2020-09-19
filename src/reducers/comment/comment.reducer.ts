import { IState, IAction } from "../comment/interfaces";

const INITIAL_STATE = { comments: [], error: null, loading: true, heading: "Comments" };

const commentReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	switch (action.type) {
		case "FETCHING_COMMENTS":
			return { ...state, loading: true };
		case "COMMENTS_FETCH_SUCCEEDED":
			return { ...state, comments: [...action.comments], loading: false };
		case "COMMENTS_FETCH_FAILED":
			return { ...state, error: action.message, loading: false };
		default:
			return state;
	}
};

export default commentReducer;
