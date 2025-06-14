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
		display: "flex",
		gap: tokens.spacingHorizontalM,
	},

	tabList: {},

	footer: {},

	card: {
		maxWidth: "25em",
		backgroundColor: tokens.colorNeutralCardBackground,
	},

	grainTexture: {
		width: "250px",
		height: "250px",
		outline: `solid 6px black`,
	},

	// sections
	services: {
		background: `url(https://grainy-gradients.vercel.app/noise.svg)`,
		backgroundColor: tokens.colorBrandBackground2,
		backgroundBlendMode: "multiply",
		color: tokens.colorBrandForegroundInverted,
	},
});
