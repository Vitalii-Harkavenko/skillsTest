import { LogoText } from "./LogoText"

export const NavbarContent = ({logoLext}) => {
	return (
		<>
		<div className="logo-wrapper">
			<div className="logo"></div>
			{
				logoLext &&
				<div className="logo-text">
					<LogoText />
				</div>
			}
		</div>
		<div className="navbar-menus">
			<p>01. HISTORY</p>
			<p>02. TEAM</p>
		</div>
		</>
	)
}