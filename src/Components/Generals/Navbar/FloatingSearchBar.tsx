import React from "react";

interface FloatingSearchBarProps {}

const FloatingSearchBar: React.FC<FloatingSearchBarProps> = () => {
	return (
		<div
			className="fixed right-0 left-0 h-auto px-5 py-2 flex justify-between shadow-lg"
			style={{ top: "3rem", backgroundColor: "#ffff" }}
		>
			<input
				className="text-sm py-2 px-4 flex-1 mr-2 bg-white border rounded-md"
				placeholder="Search"
			/>
			<button className="text-sm bg-black text-white px-5 rounded-md">
				Search
			</button>
		</div>
	);
};

export default FloatingSearchBar;
