import React, { FC } from "react";
import Sh from "../shared/styles";

type Props = {
	heading: string;
};

const Heading: FC<Props> = ({ heading }): JSX.Element => <Sh.Heading>{heading}</Sh.Heading>;

export default Heading;
