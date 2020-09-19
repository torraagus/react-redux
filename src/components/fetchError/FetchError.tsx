import React, { FC } from "react";
import Heading from "../heading/Heading";
import Sh from "../shared/styles";

interface IProps {
	error: string;
	heading: string;
}

const FetchError: FC<IProps> = ({ error, heading }): JSX.Element => {
	return (
		<>
			<Heading heading={heading} />
			<Sh.Error>{error}</Sh.Error>
		</>
	);
};

export default FetchError;
