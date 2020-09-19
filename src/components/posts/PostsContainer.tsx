import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import Heading from "../heading/Heading";
import Loading from "../loading/Loading";
import FetchError from "../fetchError/FetchError";
import { RootState } from "../../reducers/interfaces";
import St from "./styles";

const Posts: FC = (): JSX.Element => {
	const heading = "All posts";
	const { posts, error, loading } = useSelector((state: RootState) => state.postReducer);

	if (loading) return <Loading heading={heading} />;
	if (error) return <FetchError error={error} heading={heading} />;

	return (
		<St.PostsWrapper>
			<Heading heading={heading} />
			<St.Container>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</St.Container>
		</St.PostsWrapper>
	);
};

export default Posts;
