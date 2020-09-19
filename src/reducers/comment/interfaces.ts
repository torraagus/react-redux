export interface IComment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export interface IState {
	comments: IComment[];
	loading: boolean;
	error: string | null;
	heading: string;
}

export interface IAction {
	type: string;
	message: string;
	comments: IComment[];
}
