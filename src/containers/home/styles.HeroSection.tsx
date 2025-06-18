import { makeStyles, tokens } from "@fluentui/react-components";

export const useClasses = makeStyles({
	heroSection: {
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		gap: tokens.spacingVerticalL + tokens.spacingHorizontalL,
		// padding: tokens.spacingVerticalM + tokens.spacingHorizontalM,
		// boxSizing: "border-box",
		top: "0",
		left: "0",
		width: "100svw",
		height: "100svh",
		zIndex: 999,
		backgroundColor: tokens.colorNeutralBackground1,
		userSelect: "none",
		pointerEvents: "none",
		// animationIterationCount: "",
		animationDuration: "0s",
		// animationDuration: "2s",
		// animationDuration: "10s",
		animationFillMode: "forwards",
		animationTimingFunction: "ease-out",
		animationName: {
			"0%": {
				filter: `brightness(50%) blur(2px)`,
				height: "100svh",
				opacity: 1,
			},
			"50%": {
				filter: "brightness(100%)",
			},
			"75%": {
				opacity: 1,
			},
			"100%": {
				opacity: 0,
			},
		},
	},
	// heroVideo: {
	// 	position: "absolute",
	// 	top: 0,
	// 	left: 0,
	// 	width: "100svw",
	// 	height: "100svh",
	// 	objectFit: "cover",
	// 	zIndex: "-1",
	// 	filter: "blur(0px) brightness(85%)",
	// },

	heroMain: {
		display: "flex",
		flexDirection: "column",
		gap: "inherit",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		// background: `linear-gradient(
		// 	to bottom,
		// 	rgba(0, 0, 0, 0.2) 0%,
		// 	rgba(0, 0, 0, 0) 20%,
		// 	rgba(0, 0, 0, 0) 80%,
		// 	rgba(0, 0, 0, 0.2) 100%
		// 	)
		// 	`,
		// borderBottom: `solid ${tokens.strokeWidthThickest} var(--accent-color)`,
	},
	heroCard: {
		"backgroundColor": "transparent",
		// "backgroundColor": "red",
		"color": tokens.colorBrandForeground1,
		// "backdropFilter": "blur(8px) brightness(70%)",
		"boxShadow": "unset",
		"paddingLeft": tokens.spacingHorizontalXXL,
		"paddingRight": tokens.spacingHorizontalXXL,
		"alignItems": "center",
		"textAlign": "center",

		"& > *": {
			userSelect: "none",
			pointerEvents: "none",
		},
	},
});
