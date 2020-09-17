import { isEmpty } from "../utils";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (isEmpty(data)) throw new Error("No posts!");

  return data;
};

export default { fetchPosts };
