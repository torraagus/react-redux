export interface IPost {
	id: number;
	title: string;
	body: string;
}

export interface IPostState {
	selectedPost: IPost | null;
	posts: IPost[];
	loading: boolean;
	error: string | null;
}

export interface IAction {
	type: string;
	message: string;
	posts: IPost[];
	selectedPost: number;
	postId: number;
}
