import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPost, RootState } from "../../reducers/post/interfaces";
import St from "./styles";

interface IProps {
	post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
	const { selectedPost } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();
	return (
		<>
			<St.Wrapper
				selected={selectedPost?.id === post.id}
				onClick={() => dispatch({ type: "POST_SELECTED", selectedPost: post.id })}
			>
				<St.Title>{post.title}</St.Title>
				<St.Body>{post.body}</St.Body>
				<St.Id>{post.id}</St.Id>
			</St.Wrapper>
		</>
	);
};

export default Post;
