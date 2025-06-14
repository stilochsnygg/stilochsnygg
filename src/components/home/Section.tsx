import React, { type HTMLProps } from "react";
import { useClasses } from "./styles.Section";
import { mergeClasses } from "@fluentui/react-components";

interface Props extends HTMLProps<HTMLDivElement> {
	children?: React.ReactNode;
	className?: string;
}

const Section: React.FC<Props> = ({ children, className, ...rest }) => {
	const c = useClasses();

	return (
		<div
			className={mergeClasses("section", c.section, className)}
			{...rest}
		>
			{children}
		</div>
	);
};

export default Section;
