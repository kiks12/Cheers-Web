import { useEffect, useRef } from "react";

const useCursorOutside = (handler: () => void) => {
	const elementRef = useRef<any>(null);

	useEffect(() => {
		const secondHandler = (e: any) => {
			if (elementRef.current && !elementRef.current.contains(e.target)) {
				handler();
			}
		};

		document.addEventListener("click", secondHandler, { once: true });

		return () => {
			document.removeEventListener("click", secondHandler);
		};
	});

	return elementRef;
};

export default useCursorOutside;
