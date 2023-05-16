import { CarouselPair } from "./CarouselPair";
import { LogoText } from "./LogoText";
import { NavbarContent } from "./NavbarContent";
import { useRef, useState} from "react";
import tabOne from "./styles/assets/tabOne.jpg";
import tabTwo from "./styles/assets/tabTwo.png";

export default function App() {
	const otherTabs = useRef(null);
	const carouselContent = useRef(null);
	const tabContent = useRef(null);

	const [carouselPosition, setCarouselPosition] = useState(0);

	const handleCarousel = () => {
		if (window.innerWidth <= 900) {
			if (carouselPosition === -(window.innerWidth * 6)) {
				setCarouselPosition(0)
			} else {
				setCarouselPosition(carouselPosition - window.innerWidth);
				carouselContent.current.style.left = `${carouselPosition}px`
			}
		} else {
			if (carouselPosition === -( (window.innerWidth / 2) * 3)) {
				setCarouselPosition(0)
			} else {
				setCarouselPosition(carouselPosition - (window.innerWidth / 2));
				carouselContent.current.style.left = `${carouselPosition}px`
			}
		}
	};

	const [mountainsList, setMountainsList] = useState([
		{
			name: "MOUNTAIN 1",
			image: tabOne,
			active: true
		},
		{
			name: "MOUNTAIN 2",
			image: tabTwo,
			active: false
		},
		{
			name: "MOUNTAIN 3",
			image: tabOne,
			active: false
		}
	])
	const [activeTab, setActiveTab] = useState(mountainsList[0]);

	const handleSwitchTab = (e) => {
		const list = [...mountainsList];
		mountainsList.map((tab, index) => {
			if (tab.name === e.target.innerText) {
				setActiveTab(tab);
				list[index].active = true
			} else {
				list[index].active = false
			}
		})
		setMountainsList(list);

		tabContent.current.style
	};
	const handleOpenTabs = () => {
		const otherTabsDisplay = otherTabs.current.style.display;
		if (otherTabsDisplay !== "flex")
			otherTabs.current.style.display = "flex";
		else otherTabs.current.style.display = "none"
	}
  	return (
    	<>
		<section className="hero">
			<nav className="navbar">
				<NavbarContent logoLext={false}/>
			</nav>
			<header>
				<LogoText />
			</header>
			<div className="hero-filter"></div>
			<div className="hero-front"></div>
			<div className="hero-back"></div>
		</section>
		<nav className="navbar">
			<NavbarContent logoLext={true}/>
		</nav>
		<section className="section-one">
			<div className="text-content">
				<header>
					<h1>01.</h1>
					<h2>HISTORY</h2>
				</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. 
				</p>
			</div>
			<div className="carousel" onClick={handleCarousel}>
				<div className="margin">
					<div className={`carousel-content ${window.innerWidth <= 900 ? "mobile": "desktop"}`} ref={carouselContent}>
						<CarouselPair />
						<CarouselPair />
						<CarouselPair />
						<CarouselPair />
						<CarouselPair />
						<CarouselPair />
					</div>
				</div>
			</div>
		</section>
		<section className="section-two">
			<div className="text-content">
				<header>
					<h1>02.</h1>
					<h2>CLIMB</h2>
				</header>
				<p>
					Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
				</p>
			</div>
			<nav>
				{
					window.innerWidth <= 900 &&
					<>
						<div className="active-tab-mobile" onClick={handleOpenTabs}>{activeTab.name}</div>
						<div className="other-tabs" ref={otherTabs}>
							{
								mountainsList.map((tab, index) => {
									if (tab.active === false) {
										return <div key={index} onClick={handleSwitchTab}>{tab.name}</div>
									}
								})
							}
						</div>
					</>
				}
				{
					window.innerWidth > 900 &&
					<>
						{
							mountainsList.map((tab, index) => {
								if ( tab.active === true ) {return <div className="active-tab-desktop" key={index} onClick={handleSwitchTab}>{tab.name}</div>} else {
									return <div className="other-tabs-desktop" key={index} onClick={handleSwitchTab}>{tab.name}</div>
								}
							})
						}
					</>
				}
			</nav>
			<main>
				<img className="image" src={activeTab.image}></img>
			</main>
		</section>
		<footer>
			<div className="logo-wrapper">
				<div className="logo"></div>
				<div className="logo-text">
					<LogoText />
				</div>
			</div>
			<p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
		</footer>
    	</>
	)
}