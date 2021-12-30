
/*

Cheers - custom hook for handling active pages navbar link
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";


const activePageContext = createContext<any>([]);


type ActivePage = "home" | "reservations" | "";


export const ActivePageProvider = ({ children }: any) => {
	
	const router = useRouter();

	const [activePage, setActivePage] = useState<ActivePage>("");

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

	return (
		<activePageContext.Provider value={[activePage, setActivePage]}>
			{children}
		</activePageContext.Provider>
	)
};

export const useActivePage = () => useContext(activePageContext);
