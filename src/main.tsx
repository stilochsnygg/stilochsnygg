import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import Home from "./pages/home/Home";
import "./index.css";
import { lightTheme } from "./themes";

export type Link = {
	label: string;
	href: string;
	element: ReactElement;
};

export const pageLinks: Link[] = [
	{
		label: "Hem",
		href: "/",
		element: <Home />,
	},
	{
		label: "Behandlingar",
		href: "/behandlingar",
		element: <></>,
	},
	{
		label: "Kurser",
		href: "/kurser",
		element: <></>,
	},
	{
		label: "Events och Nyheter",
		href: "/events",
		element: <></>,
	},
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		ErrorBoundary: () => (
			<>
				<h1>error</h1>
			</>
		),
		children: pageLinks.map((l) => ({ path: l.href, element: l.element })),
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FluentProvider theme={lightTheme}>
			<RouterProvider router={router} />
		</FluentProvider>
	</StrictMode>
);
