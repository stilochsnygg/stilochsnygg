import { createDarkTheme, createLightTheme, type BrandVariants, type Theme } from "@fluentui/react-components";

const myNewTheme: BrandVariants = {
	10: "#030303",
	20: "#191817",
	30: "#292825",
	40: "#353430",
	50: "#42403B",
	60: "#4F4C46",
	70: "#5C5952",
	80: "#6A665E",
	90: "#78746B",
	100: "#868277",
	110: "#959084",
	120: "#A39E91",
	130: "#B3AD9E",
	140: "#C2BCAC",
	150: "#D2CBB9",
	160: "#E1DAC7",
};

export const lightTheme: Theme = {
	...createLightTheme(myNewTheme),
};

export const darkTheme: Theme = {
	...createDarkTheme(myNewTheme),
};

darkTheme.colorBrandForeground1 = myNewTheme[110];
darkTheme.colorBrandForeground2 = myNewTheme[120];
