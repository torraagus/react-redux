import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/interfaces";
import Comment from "./Comment";
import St, { Container } from "./styles";

const Comments: FC<any> = () => {
	const { comments, error, loading } = useSelector((state: RootState) => state.commentReducer);

	let heading = <St.Heading>Comments</St.Heading>;

	if (loading) {
		return (
			<>
				{heading}
				<St.Heading>Loading comments...</St.Heading>
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
	}
};

export default Comments;
