import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/post/interfaces";
import Comment from "./Comment";
import St, { Container } from "./styles";

const Comments: FC<any> = () => {
	const { comments } = useSelector((state: RootState) => state.postReducer);

	return (
		<>
			<St.Heading>Comments</St.Heading>
			{comments.length == 0 ? (
				<St.NoResource>No comments</St.NoResource>
			) : (
				<Container vertical>
					{comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</Container>
			)}
		</>
	);
};

export default Comments;
