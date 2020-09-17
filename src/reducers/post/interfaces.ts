export interface RootState {
	postReducer: IState;
}

export interface IPost {
	id: number;
	title: string;
	body: string;
}

export interface IComment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export interface IState {
	selectedPost: IPost | null;
	comments: IComment[];
	posts: IPost[];
	error: string | null;
}

export interface IAction {
	posts: IPost[];
	type: string;
	selectedPost: number;
	comments: IComment[];
	postId: number;
	message: string;
}
