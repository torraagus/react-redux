import React, { FC } from "react";
import Sh from "../shared/styles";

interface IProps {
	heading: string;
}

const Heading: FC<IProps> = ({ heading }): JSX.Element => {
	return <Sh.Heading>{heading}</Sh.Heading>;
};

export default Heading;
