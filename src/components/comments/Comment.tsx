import React, { FC } from "react";
import { IComment } from "../../reducers/comment/interfaces";
import St from "./styles";

interface IProps {
	comment: IComment;
}

const Comment: FC<IProps> = ({ comment: { body, email } }) => {
	return (
		<St.Wrapper>
			<St.Body>{body}</St.Body>
			<St.Email>{email}</St.Email>
		</St.Wrapper>
	);
};

export default Comment;
