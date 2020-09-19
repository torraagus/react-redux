import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interfaces";
import Comments from "../comments/CommentsContainer";
import Post from "./Post";
import Heading from "../heading/Heading";
import St, { Container } from "./styles";

const SelectedPost: FC = () => {
	const heading = "Selected post";
	const { selectedPost: post } = useSelector((state: RootState) => state.postReducer);

	return post ? (
		<>
			<Heading heading={heading} />
			<Container>
				<Post disabled post={post} />
			</Container>
			<Comments />
		</>
	) : (
		<>
			<Heading heading={heading} />
			<St.Subheading>No post selected</St.Subheading>
		</>
	);
};

export default SelectedPost;
