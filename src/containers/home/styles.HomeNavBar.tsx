import { makeStyles, tokens } from "@fluentui/react-components";

export const useClasses = makeStyles({
	homeNavBar: {
		"display": "flex",
		"justifyContent": "center",
		"alignItems": "center",
		"alignSelf": "center",
		"position": "fixed",
		"width": "fit-content",
		"height": "1em",
		"padding": tokens.spacingVerticalM + tokens.spacingHorizontalXXXL,
		"zIndex": 2,
		"gap": tokens.spacingHorizontalXXXL,

		"boxShadow": tokens.shadow4,
		"backdropFilter": "blur(4px)",
		"color": tokens.colorNeutralForegroundInverted,
		"backgroundColor": "rgba(0,0,0,0.4)",
		"borderRadius": "0 " + "0 " + "16px " + "16px ",
		"transition": `all ${tokens.durationGentle} ${tokens.curveAccelerateMid}`,

		"& a": {
			"transition": `filter ${tokens.durationNormal} ${tokens.curveDecelerateMid}`,
			":hover": {
				filter: "brightness(75%)",
			},
		},

		"&.scrolled": {
			backgroundColor: tokens.colorBrandBackground2,
			color: tokens.colorBrandForeground2,
		},
	},
});
