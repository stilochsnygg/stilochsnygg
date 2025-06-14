import { makeStyles, tokens } from "@fluentui/react-components";

export const useClasses = makeStyles({
	pageWrapper: {
		"display": "flex",
		"background": "black",
		"width": "100svw",
		"height": "100svh",
		"& .page": {
			display: "flex",
			flexDirection: "column",
			flexGrow: 1,
			// gap: tokens.spacingVerticalM,
			padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
			boxSizing: "border-box",
			minWidth: "100%",
			minHeight: "100%",
			overflowX: "hidden",
			overflowY: "scroll",
			scrollBehavior: "smooth",
		},

		"& > .fui-Divider": {
			color: "red !important",
		},

		"@media screen and (max-width: 640px)": {
			fontSize: "8px",
		},
	},
	logo: {
		"position": "fixed",
		"top": "0",
		"left": "0",
		"zIndex": 2,
		"transition": `filter ${tokens.durationNormal} ${tokens.curveDecelerateMid}`,
		"overflow": "hidden",
		"& img": {
			width: "2.5em",
			height: "auto",
			borderRadius: "0 " + "0 " + tokens.borderRadiusLarge + "0",
		},

		":hover": {
			filter: "brightness(50%)",
		},
	},
});
