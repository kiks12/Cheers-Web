
/*

Cheers - Floating Search Bar for Smaller Screen
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


import React from "react";
import useCursorOutside from "../../../Custom-Hooks/useCursorOutside";


interface FloatingSearchBarProps {
	setShowFloatingSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}


const FloatingSearchBar: React.FC<FloatingSearchBarProps> = ({ setShowFloatingSearchBar }) => {

	const elementRef = useCursorOutside(() => {
		setShowFloatingSearchBar(false);
	})


	return (
		<div
			ref={elementRef}
			className="fixed right-0 left-0 h-auto px-5 py-2 flex flex-col justify-between shadow-lg"
			style={{ top: "3rem", backgroundColor: "#ffff" }}
		>
			<input
				className="text-sm py-2 px-4 flex-1 bg-white border "
				placeholder="Search"
			/>
			<button className="text-sm flex-1 py-2 border border-black mt-2 bg-black text-white px-5 ">
				Search
			</button>
		</div>
	);
};

export default FloatingSearchBar;
