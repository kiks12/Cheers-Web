import { useEffect, useState } from "react";

interface cursorPosition {
	xAxis: number;
	yAxis: number;
}

const useCursorPosition = () => {
	const [cursorPosition, setCursorPosition] = useState<cursorPosition>({ xAxis: 0, yAxis: 0 });

	const handleMouseMoveEvent = (e: MouseEvent) => {
		setCursorPosition((prev) => {
			return (prev = {
				xAxis: e.clientX,
				yAxis: e.clientY,
			});
		});
	};

	useEffect(() => {
		document.addEventListener("mousemove", handleMouseMoveEvent);

		return () => document.removeEventListener("mousemove", handleMouseMoveEvent);
	}, []);

	return [cursorPosition];
};

export default useCursorPosition;
