import React, { type HTMLProps } from "react";
import { useClasses } from "./styles.HeroSection";
import { Card, mergeClasses, Text } from "@fluentui/react-components";

interface HeroSectionProps extends HTMLProps<HTMLDivElement> {
	children?: React.ReactNode;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>((props, ref) => {
	const c = useClasses();

	return (
		<React.Fragment>
			<div
				ref={ref}
				className={mergeClasses("hero-section", c.heroSection)}
				{...props}
			>
				<div className={mergeClasses(c.heroMain)}>
					<Card className={c.heroCard}>
						<Text size={500}>
							<h1
								style={{
									lineHeight: "0px",
									marginBottom: "8px",
									textWrap: "nowrap",
								}}
							>
								Sagas Stil & Syster Snygg AB
							</h1>
						</Text>
						<Text
							size={500}
							weight="semibold"
							style={{ fontFamily: "Edu VIC WA NT Hand" }}
							italic
						>
							<span>Vetenskap - Kvalitet - Säkerhet</span>
						</Text>
						OBS webbsida under uppbyggnad
					</Card>
					{props.children}
				</div>
			</div>
		</React.Fragment>
	);
});

export default HeroSection;
