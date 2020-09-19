import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import Heading from "../heading/Heading";
import Loading from "../loading/Loading";
import FetchError from "../fetchError/FetchError";
import { RootState } from "../../reducers/interfaces";
import { Container } from "./styles";

const Posts: FC = (): JSX.Element => {
	const heading = "All posts";
	const { posts, error, loading } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "POSTS_FETCH_REQUESTED" });
	}, []);

	if (loading) return <Loading stuff={"posts"} heading={heading} />;
	if (error) return <FetchError error={error} heading={heading} />;

	return (
		<>
			<Heading heading={heading} />
			<Container>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</Container>
		</>
	);
};

export default Posts;
