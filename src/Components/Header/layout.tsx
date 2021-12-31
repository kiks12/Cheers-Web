
/*

Cheers - Header Layout
Last Updated: Dec. 31, 2021
Tolentino, Francis James S.

*/

import React from "react";


import Navhar from "./Navbar/navbar";


import { useActivePage } from "../../Custom-Hooks/useActivePage";
import { useRouter } from "next/router";


const Layout: React.FC = ({ children }) => {

	const router = useRouter();

	const [activePage] = useActivePage();

	if (router.pathname === "/login"){
		return (
			<div>
				{ children }
			</div>
		)
	}


	return (
		<div>
			<Navhar activePage={activePage} />
			{children}
		</div>
	);
};


export default Layout;
