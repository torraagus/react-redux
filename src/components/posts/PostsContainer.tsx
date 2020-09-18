import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { RootState } from "../../reducers/interfaces";
import St, { Container } from "./styles";

const Posts: FC<any> = (): JSX.Element => {
	const { posts, error, loading } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "POSTS_FETCH_REQUESTED" });
	}, []);

	const heading = <St.Heading>All posts</St.Heading>;

	if (loading) {
		return (
			<>
				{heading}
				<St.Subheading>Loading comments...</St.Subheading>
			</>
		);
	} else if (error) {
		return (
			<>
				{heading}
				<St.Error>{error}</St.Error>
			</>
		);
	} else {
		return (
			<>
				{heading}
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
