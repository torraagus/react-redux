import { IState, IAction } from "./interfaces";

const INITIAL_STATE = { selectedPost: null, posts: [], error: null };

const postReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { posts } = state;
	switch (action.type) {
		case "POST_SELECTED":
			const selected = posts.filter((p) => p.id === action.selectedPost)[0];
			console.log(selected);
			return { ...state, selected };
		case "POSTS_FETCH_SUCCEEDED":
			return { ...state, posts: [...action.posts] };
		case "POSTS_FETCH_FAILED":
			return { ...state, error: action.message };
		default:
			return state;
	}
};

export default postReducer;
