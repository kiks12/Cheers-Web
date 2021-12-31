
/*

Cheers - custom hook for closing pop up components on click outside itself
Last Updated: Dec. 31, 2021
Tolentino, Francis James S.

*/


import { useEffect, useRef } from "react";


type ElementRefType = HTMLDivElement | HTMLInputElement | null;


const useCursorOutside = (handler: () => any) => {
	
	const elementRef = useRef<ElementRefType>(null);

	useEffect(() => {
		
		const mainHandler = (e: MouseEvent) => {
			if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
				handler();
			}
		};

		document.addEventListener("click", mainHandler);

		
		return () => {
			document.removeEventListener("click", mainHandler);
		};
	});


	return elementRef;
};


export default useCursorOutside;
