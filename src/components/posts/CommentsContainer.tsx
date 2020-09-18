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
				{comments.length == 0 ? (
					<St.Subheading>No comments</St.Subheading>
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
