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

	// sections
	services: {
		backgroundColor: tokens.colorBrandBackground2,
		color: tokens.colorBrandForegroundInverted,
	},
});
