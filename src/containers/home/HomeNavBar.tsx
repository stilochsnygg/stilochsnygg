import React, { useEffect } from "react";
import { Button, mergeClasses, Text } from "@fluentui/react-components";
import { useClasses } from "./styles.HomeNavBar";
import { Link } from "react-router-dom";
import { pageLinks } from "../../main";
import { useScrollTop } from "../../hooks/states";

type Props = {};

const HomeNavBar: React.FC<Props> = ({ ...props }) => {
	const c = useClasses();

	const scrollTop = useScrollTop();

	useEffect(() => {
		console.debug("scroll changed", scroll);
	}, [scroll]);
	return (
		<div className={mergeClasses(c.homeNavBar, scrollTop != 0 && "scrolled")}>
			{pageLinks.map((l) => {
				return (
					<Link
						to={l.href}
						key={l.href}
					>
						<Text
							size={300}
							weight="semibold"
						>
							{l.label}
						</Text>
					</Link>
				);
			})}
		</div>
	);
};

export default HomeNavBar;
