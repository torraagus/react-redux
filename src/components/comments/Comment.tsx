import React, { FC } from "react";
import { IComment } from "../../reducers/comment/interfaces";
import St from "./styles";

type Props = {
	comment: IComment;
};

const Comment: FC<Props> = ({ comment: { body, email } }) => (
	<St.Wrapper>
		<St.Body>{body}</St.Body>
		<St.Email>{email}</St.Email>
	</St.Wrapper>
);

export default Comment;
