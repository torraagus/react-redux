import { isEmpty } from "../utils";

const fetchPosts = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	if (isEmpty(data)) throw new Error("Error: Cannot retrieve posts");

	return data;
};

const fetchPostComments = async (postId: number) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
	const data = await res.json();

	if (isEmpty(data)) throw new Error("Error: Cannot retrieve comments");

	return data;
};

export default { fetchPosts, fetchPostComments };
