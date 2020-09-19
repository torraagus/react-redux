import postReducer from "./post/post.reducer";
import commentReducer from "./comment/comment.reducer";
import loadingBarReducer from "./loadingBar/loadingBar.reducer";
import { combineReducers } from "redux";

export default combineReducers({
	postReducer,
	commentReducer,
	loadingBarReducer,
});
