import { IState } from "../components/posts/interfaces";

interface IAction {
  posts: [];
  type: string;
  selected: number;
  message: string;
}

const INITIAL_STATE = { selected: null, posts: [], error: null };

const postReducer = (state: IState = INITIAL_STATE, action: IAction) => {
  const { posts } = state;
  switch (action.type) {
    case "POST_SELECTED":
      const selected = posts.filter((p) => p.id === action.selected)[0];
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

export { postReducer };
