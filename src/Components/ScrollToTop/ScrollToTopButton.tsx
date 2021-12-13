import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const scrollToTopHandler = () => {
	window.scrollTo(0, 0);
};

const ScrollToTopButton: React.FC = () => {
	return (
		<div
			className="fixed z-20 bottom-0 right-0 mr-5 mb-5 shadow-md cursor-pointer rounded-full border p-3"
			style={{ backgroundColor: "#ffff" }}
			onClick={scrollToTopHandler}
		>
			<IoIosArrowUp size={20} />
		</div>
	);
};

export default ScrollToTopButton;
