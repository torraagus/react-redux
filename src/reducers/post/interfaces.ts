export interface RootState {
	postReducer: IState;
}

export interface IPost {
	id: number;
	title: string;
	body: string;
}

export interface IState {
	selectedPost: IPost | null;
	posts: IPost[];
	error: string | null;
}

export interface IAction {
	posts: [];
	type: string;
	selectedPost: number;
	message: string;
}
