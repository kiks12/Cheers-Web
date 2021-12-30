
/*

Cheers - custom hook for closing pop up components on click outside itself
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import React, { useEffect, useRef } from "react";

type ElementRefType = HTMLDivElement | null;

const useCursorOutside = (handler: () => void, cursorRef?: React.MutableRefObject<ElementRefType>) => {
	
	const elementRef = typeof cursorRef !== "undefined" ? cursorRef : useRef<ElementRefType>(null);

	useEffect(() => {
		
		const mainHandler = (e: any) => {
			if (elementRef.current && !elementRef.current.contains(e.target)) {
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
