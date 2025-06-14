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
import treatmentImg from "../../assets/images/treatment.jpg";
//textures
import grainSvg from "../../assets/textures/grain.svg";
//icons
import { ArrowRight12Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

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
				<h2 style={{ opacity: "0.5", position: "absolute", left: "0", bottom: "0" }}>OBS. Webbsida under uppbyggnad</h2>
				<Text
					size={600}
					weight="semibold"
					style={{
						color: tokens.colorBrandForeground1,
						textAlign: "center",
					}}
				>
					Saga Stil & Syster Snygg AB
					<br />
					<Text
						size={300}
						weight="regular"
						style={{
							color: tokens.colorNeutralForeground2,
						}}
					>
						Vi är en kombinerad klinik, akademi och studio där kvalitet möter kreativitet.
					</Text>
				</Text>
				<div className={c.cardSection}>
					<Card className={c.card}>
						<CardHeader
							header={
								<Text
									style={{
										display: "flex",
										flexDirection: "column",
										fontSize: tokens.fontSizeBase400,
										whiteSpace: "nowrap",
									}}
								>
									Akademi
									<Text
										style={{
											fontSize: tokens.fontSizeBase200,
											display: "-webkit-box",
											WebkitLineClamp: 2,
											WebkitBoxOrient: "vertical",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										För dig som vill bli expert.
									</Text>
								</Text>
							}
							action={
								<Button
									icon={<ArrowRight12Regular />}
									appearance="subtle"
									style={{
										borderColor: tokens.colorPaletteMarigoldBorder2,
									}}
								>
									Till Zenler
								</Button>
							}
						/>
						<CardPreview>
							<img
								src={digitalCoursesImg}
								alt=""
								style={{ maxWidth: "100%", height: "auto" }}
							/>
						</CardPreview>
						<CardFooter>
							Just nu utbildar vi dig i 'personal' styling och fashion stylist.
							<br />
							Få certifiering online genom vår Zenler-plattform. Interaktiva videolektioner, quiz och digitala material. Perfekt för dig som vill
							lära i egen takt.
						</CardFooter>
					</Card>
					<Card className={c.card}>
						<CardHeader
							header={
								<Text
									style={{
										display: "flex",
										flexDirection: "column",
										fontSize: tokens.fontSizeBase400,
										whiteSpace: "nowrap",
									}}
								>
									Boka Tjänster
									<Text
										style={{
											fontSize: tokens.fontSizeBase200,
											display: "-webkit-box",
											WebkitLineClamp: 2,
											WebkitBoxOrient: "vertical",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										Bokningar sker genom Boka Direkt
									</Text>
								</Text>
							}
							action={
								<Button
									icon={<ArrowRight12Regular />}
									appearance="subtle"
									style={{
										borderColor: tokens.colorPaletteMarigoldBorder2,
									}}
								>
									<Link
										to={"https://www.bokadirekt.se/places/sagas-stil-syster-snygg-ab-58275"}
										referrerPolicy="no-referrer"
										target="_blank"
									>
										Boka Direkt
									</Link>
								</Button>
							}
						/>
						<CardPreview>
							<img
								src={treatmentImg}
								alt=""
								style={{ maxWidth: "100%", height: "auto" }}
							/>
						</CardPreview>
						<CardFooter>
							Upptäck föreläsningar, workshops, färg- & stilanalyser samt injektions-, microneedling- och LED-behandlingar – boka din plats och ta
							del av exklusiva erbjudanden!
						</CardFooter>
					</Card>
				</div>
			</Section>
			{/* <Section>other</Section> */}
		</div>
	);
};

export default Home;
