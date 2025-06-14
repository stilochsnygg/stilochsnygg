import { mergeClasses } from "@fluentui/react-components";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useClasses } from "./styles.MainLayout";

type Props = {};

const MainLayout = (props: Props) => {
	const c = useClasses();
	const location = useLocation();
	return (
		<div className={mergeClasses("page-wrapper", c.pageWrapper)}>
			{location.pathname != "/" && <div>header</div>}
			{/* background logo */}

			<Outlet />
		</div>
	);
};

export default MainLayout;
