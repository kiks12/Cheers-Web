
/*

Cheers - custom hook to get the current top of page
Last Updated: Dec. 31, 2021
Tolentino, Francis James S.

*/


import { useEffect, useState } from "react";


const useTopOfPage = () => {

	const [top, setTop] = useState<number>(0);

	
	useEffect(() => {

		const scrollHandler = () => {
			setTop(document.body.getBoundingClientRect().top);
		};

		document.addEventListener("scroll", scrollHandler);


		return () => document.removeEventListener("scroll", scrollHandler);
	}, []);


	return top;
};


export default useTopOfPage;
