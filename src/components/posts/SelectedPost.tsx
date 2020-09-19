import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interfaces";
import Comments from "../comments/CommentsContainer";
import Post from "./Post";
import Heading from "../heading/Heading";
import St from "./styles";

const SelectedPost: FC = () => {
	const heading = "Selected post";
	const { selectedPost: post } = useSelector((state: RootState) => state.postReducer);

	return post ? (
		<St.SelectedPostWrapper>
			<Heading heading={heading} />
			<St.Container>
				<Post post={post} />
			</St.Container>
			<Comments />
		</St.SelectedPostWrapper>
	) : (
		<St.SelectedPostWrapper>
			<Heading heading={heading} />
			<St.Subheading>No post selected</St.Subheading>
		</St.SelectedPostWrapper>
	);
};

export default SelectedPost;
