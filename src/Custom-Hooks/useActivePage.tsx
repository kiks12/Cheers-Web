import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const activePageContext = createContext<any>([]);

export const ActivePageProvider = ({ children }: any) => {
	const router = useRouter();

	const [activePage, setActivePage] = useState<any>(null);

	useEffect(() => {
		const path = router.pathname;
		switch (path) {
			case "/":
				setActivePage("home");
				break;
			case "/profile/reservations":
				setActivePage("reservations");
				break;
			default:
				setActivePage("");
				break;
		}
	}, [router, setActivePage]);

	return <activePageContext.Provider value={[activePage, setActivePage]}>{children}</activePageContext.Provider>;
};

export const useActivePage = () => useContext(activePageContext);
