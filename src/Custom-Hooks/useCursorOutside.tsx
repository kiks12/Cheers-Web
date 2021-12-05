import { useEffect, useRef } from "react";

const useCursorOutside = (handler: () => void) => {
	const elementRef = useRef<any>(null);

	useEffect(() => {
		const secondHandler = (e: any) => {
			if (!elementRef.current) return;
			if (!elementRef.current.contains(e.target)) {
				handler();
			}
		};

		document.addEventListener("mousedown", secondHandler);

		return () => {
			document.removeEventListener("mousedown", secondHandler);
		};
	});

	return elementRef;
};

export default useCursorOutside;
