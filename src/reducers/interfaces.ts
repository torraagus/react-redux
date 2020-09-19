import { IPostState } from "./post/interfaces";
import { ICommentState } from "./comment/interfaces";
import { IState as ILoadingBarState } from "./loadingBar/interfaces";

export interface RootState {
	postReducer: IPostState;
	commentReducer: ICommentState;
	loadingBarReducer: ILoadingBarState;
}
