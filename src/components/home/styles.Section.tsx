import { makeStyles, tokens } from "@fluentui/react-components";

export const useClasses = makeStyles({
	section: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: tokens.spacingVerticalXXXL,
		minWidth: "100svw",
		minHeight: "100svh",

		flex: 1,
		zIndex: 1,
		boxSizing: "border-box",
		// backdropFilter: "blur(16px) brightness(100%)",
		// background: `linear-gradient(
		// 	to bottom,
		// 	rgba(0, 0, 0, 0.2) 0%,
		// 	rgba(0, 0, 0, 0) 20%,
		// 	rgba(0, 0, 0, 0) 80%,
		// 	rgba(0, 0, 0, 0.2) 100%
		// 	)
		// 	`,
		borderBottom: `solid ${tokens.strokeWidthThickest} ${tokens.colorPaletteMarigoldBorder1}`,
		color: tokens.colorBrandBackgroundInverted,
	},
});
