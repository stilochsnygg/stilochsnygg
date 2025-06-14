import React, { useEffect, useRef, useState } from "react";
import { useClasses } from "./styles.Home";
import { Button, Card, CardFooter, CardHeader, CardPreview, Divider, mergeClasses, Tab, TabList, Text, tokens } from "@fluentui/react-components";
import HeroSection from "../../containers/home/HeroSection";
import HomeNavBar from "../../containers/home/HomeNavBar";
import Section from "../../components/home/Section";
//images
import digitalCoursesImg from "../../assets/images/digitala-kurser.jpg";
import coursesOnSiteImg from "../../assets/images/kurser-pa-plats.jpg";
import studioImg from "../../assets/images/studio.jpg";
import injectionImg from "../../assets/images/injection2.jpg";
import productsImg from "../../assets/images/products.jpg";
import classroomImg from "../../assets/images/classroom.jpg";
import { ArrowRight12Regular } from "@fluentui/react-icons";

type Props = {};

const Home = (props: Props) => {
	const c = useClasses();

	//refs
	const heroSectionRef = useRef<HTMLDivElement>(null);

	//states
	const [heroAnimationState, setHeroAnimationState] = useState<boolean>(true);

	const [currentTab, setCurrentTab] = useState<string>("digitalcourses");

	//functions
	const handleAnimationState = () => {
		setHeroAnimationState(false);
	};

	//useEffects
	useEffect(() => {
		if (!heroSectionRef.current) return;

		heroSectionRef.current.addEventListener("animationend", handleAnimationState);

		return () => {
			heroSectionRef.current?.removeEventListener("animationend", handleAnimationState);
		};
	}, [heroSectionRef, heroAnimationState]);

	return (
		<div
			className={mergeClasses("page", c.main)}
			style={{
				overflowY: heroAnimationState ? "hidden" : "scroll",
			}}
		>
			<HomeNavBar />
			<HeroSection ref={heroSectionRef} />
			{/* Our Services */}
			<Section className={c.services}>
				<h2>Webbsida under uppbyggnad</h2>
				<Card className={c.card}>
					<CardHeader
						header={<Text size={500}>Kurser</Text>}
						action={<Button icon={<ArrowRight12Regular />}>Till Zenler</Button>}
					/>
					<CardPreview>
						<img
							src={digitalCoursesImg}
							alt=""
							style={{ maxHeight: "40svh" }}
						/>
					</CardPreview>
					Få certifiering online genom vår Zenler-plattform. Interaktiva videolektioner, quiz och digitala material. Perfekt för dig som vill lära i
					egen takt.
				</Card>
			</Section>
			{/* <Section>other</Section> */}
		</div>
	);
};

export default Home;

{
	/* <Text
	size={800}
	weight="bold"
	style={{}}
>
	<h2>Akademi</h2>
</Text> */
}
