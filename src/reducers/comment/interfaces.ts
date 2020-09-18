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

export interface ICommentState {
	comments: IComment[];
	loading: boolean;
	error: string | null;
}

export interface IAction {
	type: string;
	message: string;
	comments: IComment[];
}
