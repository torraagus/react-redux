import { IState as IPostState } from "./post/interfaces";
import { IState as ICommentState } from "./comment/interfaces";
import { IState as ILoadingBarState } from "./loadingBar/interfaces";

export interface RootState {
	postReducer: IPostState;
	commentReducer: ICommentState;
	loadingBarReducer: ILoadingBarState;
}
