import React, { FC } from "react";
import Heading from "../heading/Heading";
import Sh from "../shared/styles";

type Props = {
	stuff: string;
	heading: string;
};

const Loading: FC<Props> = ({ stuff, heading }): JSX.Element => (
	<>
		<Heading heading={heading} />
		<Sh.Subheading>Loading {stuff}...</Sh.Subheading>
	</>
);
export default Loading;
