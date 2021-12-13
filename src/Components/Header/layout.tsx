import React from "react";
import { useActivePage } from "../../Custom-Hooks/useActivePage";
import Navhar from "./Navbar/navbar";

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
