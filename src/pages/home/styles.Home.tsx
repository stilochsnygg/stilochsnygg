import { makeStyles, tokens } from "@fluentui/react-components";

export const useClasses = makeStyles({
	main: {
		padding: "0 !important",
		boxSizing: "content-box",
		alignItems: "flex-start",
		overflowY: "scroll",
	},

	section: {
		flexDirection: "row",
		padding: `${tokens.spacingVerticalXXXL} ${tokens.spacingHorizontalXXXL}`,
		justifyContent: "center",
		alignItems: "flex-start",
		// boxSizing: "border-box",
	},

	cardSection: {
		"display": "flex",
		"justifyContent": "flex-start",
		"overflowX": "scroll",
		"paddingLeft": "1rem",
		"gap": tokens.spacingHorizontalM,
		"@media screen and (max-width: 640px)": {
			width: "100svw",
		},
	},

	tabList: {},

	footer: {},

	card: {
		"position": "relative",
		"maxWidth": "25svw",
		"minHeight": "fit-content",
		"backgroundColor": tokens.colorNeutralCardBackground,
		"@media screen and (max-width: 1420px)": {
			maxWidth: "20em",
		},
		"@media screen and (max-width: 640px)": {
			maxHeight: "fit-content",
			maxWidth: "55em",
		},
	},

	grainTexture: {
		width: "250px",
		height: "250px",
		outline: `solid 6px black`,
	},

	// sections
	services: {
		paddingTop: tokens.spacingVerticalXL,
		background: `url(https://grainy-gradients.vercel.app/noise.svg)`,
		backgroundColor: tokens.colorBrandBackground2,
		backgroundBlendMode: "multiply",
		color: tokens.colorBrandForegroundInverted,
		justifyContent: "flex-start",
	},
});
