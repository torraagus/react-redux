export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IState {
  selected: IPost | null;
  posts: IPost[];
  error: string | null;
}
