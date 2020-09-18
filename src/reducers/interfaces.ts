import { IPostState } from "./post/interfaces";
import { ICommentState } from "./comment/interfaces";

export interface RootState {
	postReducer: IPostState;
	commentReducer: ICommentState;
}
