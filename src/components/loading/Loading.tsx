import React, { FC } from "react";
import Heading from "../heading/Heading";
import Sh from "../shared/styles";

interface IProps {
	stuff: string;
	heading: string;
}

const Loading: FC<IProps> = ({ stuff, heading }): JSX.Element => {
	return (
		<>
			<Heading heading={heading} />
			<Sh.Subheading>Loading {stuff}...</Sh.Subheading>
		</>
	);
};

export default Loading;
