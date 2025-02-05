// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/Pack" activeStyle>
						Pack
					</NavLink>
					<NavLink to="/">
						Home
					</NavLink> 

				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
