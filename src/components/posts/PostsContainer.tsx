import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { RootState } from "../../reducers/post/interfaces";
import St, { Container } from "./styles";

const PostsContainer: FC<any> = (): JSX.Element => {
	const { posts, error } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "POSTS_FETCH_REQUESTED" });
	}, []);

	return error ? (
		<St.Error>{error}</St.Error>
	) : (
		<>
			<St.Heading>All posts</St.Heading>
			<Container>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</Container>
		</>
	);
};

export default PostsContainer;
