import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { IPost } from "../../reducers/post/interfaces";
import St from "./styles";

interface IProps {
	post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
	const dispatch = useDispatch();
	return (
		<>
			<St.Wrapper onClick={() => dispatch({ type: "POST_SELECTED", selected: post.id })}>
				<St.Title>{post.title}</St.Title>
				<St.Body>{post.body}</St.Body>
				<St.Id>{post.id}</St.Id>
			</St.Wrapper>
		</>
	);
};

export default Post;
