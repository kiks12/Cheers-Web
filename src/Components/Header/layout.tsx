
/*

Cheers - Header Layout
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import React from "react";


import Navhar from "./Navbar/navbar";


import { useActivePage } from "../../Custom-Hooks/useActivePage";

const Layout: React.FC = ({ children }) => {

	const [activePage, setActivePage] = useActivePage();


	return (
		<div>
			<Navhar activePage={activePage} setActivePage={setActivePage} />
			{children}
		</div>
	);
};

export default Layout;
