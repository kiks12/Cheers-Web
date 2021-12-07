import React, { useEffect, useRef } from "react";

type ElementRefType = HTMLDivElement | null;

const useCursorOutside = (handler: () => void, cursorRef?: React.MutableRefObject<ElementRefType>) => {
	const elementRef = typeof cursorRef !== "undefined" ? cursorRef : useRef<ElementRefType>(null);

	useEffect(() => {
		const secondHandler = (e: any) => {
			if (elementRef.current && !elementRef.current.contains(e.target)) {
				if (typeof handler !== "undefined") handler();
			}
		};

		document.addEventListener("click", secondHandler);

		return () => {
			document.removeEventListener("click", secondHandler);
		};
	});

	return elementRef;
};

export default useCursorOutside;
