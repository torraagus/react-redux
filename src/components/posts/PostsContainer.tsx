import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { RootState } from "../../reducers/interfaces";
import St, { Container } from "./styles";

const Posts: FC<any> = (): JSX.Element => {
	const { posts, error } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "POSTS_FETCH_REQUESTED" });
	}, []);

	if (posts.length == 0) {
		return <div>Loading posts...</div>;
	} else if (error) {
		return <St.Error>{error}</St.Error>;
	} else {
		return (
			<>
				<St.Heading>All posts</St.Heading>
				<Container>
					{posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</Container>
			</>
		);
	}
};

export default Posts;
