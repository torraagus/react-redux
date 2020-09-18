import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../../reducers/post/interfaces";
import { RootState } from "../../reducers/interfaces";
import St from "./styles";

interface IProps {
	post: IPost;
	disabled?: boolean;
}

const Post: FC<IProps> = ({ post, disabled }) => {
	const { selectedPost } = useSelector((state: RootState) => state.postReducer);
	const dispatch = useDispatch();

	const onPostSelected = () => {
		if (disabled) return;
		dispatch({ type: "POST_SELECTED", selectedPost: post.id });
		dispatch({ type: "COMMENTS_FETCH_REQUESTED", postId: post.id });
	};

	return (
		<>
			<St.Wrapper disabled={disabled} selected={selectedPost?.id === post.id} onClick={onPostSelected}>
				<St.Title>{post.title}</St.Title>
				<St.Body>{post.body}</St.Body>
				<St.Id>{post.id}</St.Id>
			</St.Wrapper>
		</>
	);
};

export default Post;
