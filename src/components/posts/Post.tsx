import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../../reducers/post/interfaces";
import { RootState } from "../../reducers/interfaces";
import St from "./styles";
import Sh from "../shared/styles";

type Props = {
	post: IPost;
	disabled?: boolean;
};

const Post: FC<Props> = ({ post, disabled }) => {
	const { selectedPost } = useSelector((state: RootState) => state.postReducer);
	const { title, body, id } = post;
	const dispatch = useDispatch();

	const onPostSelected = () => {
		if (disabled) return;
		dispatch({ type: "POST_SELECTED", selectedPost: post.id });
		dispatch({ type: "COMMENTS_FETCH_REQUESTED", postId: post.id });
	};

	return (
		<>
			<St.Wrapper disabled={disabled} selected={selectedPost?.id === id} onClick={onPostSelected}>
				<St.Title>{title}</St.Title>
				<Sh.Body>{body}</Sh.Body>
				<St.Id>{id}</St.Id>
			</St.Wrapper>
		</>
	);
};

export default Post;
