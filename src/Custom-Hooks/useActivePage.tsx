
/*

Cheers - custom hook for handling active navbar link
Last Updated: Jan. 4, 2022
Tolentino, Francis James S.

*/


import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const INDEX_ROUTE = "/";
const PROFILE_RESERVATIONS_ROUTE = "/profile/reservations";
const COMMUNITY_ROUTE = "/community";


type ActivePage = "home" | "reservations" | "community" | "";


const useActivePage = () => {
	
	const router = useRouter();

	const [activePage, setActivePage] = useState<ActivePage>("");


	useEffect(() => {

		const path = router.pathname;

		switch (path) {
			case INDEX_ROUTE:
				setActivePage("home");
				break;
			case PROFILE_RESERVATIONS_ROUTE:
				setActivePage("reservations");
				break;
			case COMMUNITY_ROUTE:
				setActivePage("community");
				break;
			default:
				setActivePage("");
				break;
		}

	}, [router, setActivePage]);


	return activePage;
};


export default useActivePage;
