import { makeStyles, tokens } from "@fluentui/react-components";

export const useClasses = makeStyles({
	homeNavBar: {
		"display": "flex",
		"justifyContent": "center",
		"alignItems": "center",
		"alignSelf": "center",
		"position": "sticky",
		// "width": "fit-content",
		"width": "100%",
		"height": "1rem",
		"top": 0,
		"left": 0,
		"padding": tokens.spacingVerticalM + " 0",
		"zIndex": 2,
		"gap": tokens.spacingHorizontalXXXL,

		"boxShadow": tokens.shadow4,
		"backdropFilter": "blur(4px)",
		// "backgroundColor": "rgba(0,0,0,0.4)",
		"color": tokens.colorNeutralForegroundInverted,
		"backgroundColor": tokens.colorBrandBackground,
		// "borderRadius": "0 " + "0 " + "16px " + "16px ",
		"transition": `all ${tokens.durationGentle} ${tokens.curveAccelerateMid}`,

		"& a": {
			"transition": `filter ${tokens.durationNormal} ${tokens.curveDecelerateMid}`,
			":hover": {
				filter: "brightness(75%)",
			},
		},

		"&.scrolled": {
			// backgroundColor: tokens.colorBrandBackground1,
			// color: tokens.colorBrandForeground2,
		},
	},
	logo: {
		"position": "absolute",
		"top": "0",
		"left": "0",
		"transition": `filter ${tokens.durationNormal} ${tokens.curveDecelerateMid}`,
		"overflow": "hidden",
		"height": "100%",
		"& img": {
			width: "auto",
			height: "100%",
			// borderRadius: "0 " + "0 " + tokens.borderRadiusLarge + "0",
		},

		":hover": {
			filter: "brightness(50%)",
		},
	},
});
