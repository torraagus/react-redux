import { IState, IAction } from "./interfaces";

const INITIAL_STATE = { comments: [], selectedPost: null, posts: [], error: null };

const postReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	const { posts } = state;
	switch (action.type) {
		case "COMMENTS_FETCH_SUCCEEDED":
			return { ...state, comments: [...action.comments] };
		case "COMMENTS_FETCH_FAILED":
			return { ...state, error: action.message };
		case "POST_SELECTED":
			const selectedPost = posts.filter((p) => p.id === action.selectedPost)[0];
			return { ...state, selectedPost };
		case "POSTS_FETCH_SUCCEEDED":
			return { ...state, posts: [...action.posts] };
		case "POSTS_FETCH_FAILED":
			return { ...state, error: action.message };
		default:
			return state;
	}
};

export default postReducer;
