import { useEffect, useState } from "react";

const useTopOfPage = () => {
	const [top, setTop] = useState<number>(0);

	const scrollHandler = () => {
		setTop(document.body.getBoundingClientRect().top);
	};

	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);

		return () => document.removeEventListener("scroll", scrollHandler);
	}, []);

	return top;
};

export default useTopOfPage;