import React from "react";
import Link from "next/link";
import useCursorOutside from "../../../Custom-Hooks/useCursorOutside";
import { AiOutlineClose } from "react-icons/ai";

interface NavBarFullScreenProps {
	setShowNavBarFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleFullScreenNavbarClose = (setShowNavBarFullScreen: React.Dispatch<React.SetStateAction<boolean>>) => {
	setShowNavBarFullScreen((prev) => (prev = !prev));
};

const NavBarFullScreen: React.FC<NavBarFullScreenProps> = ({ setShowNavBarFullScreen }) => {
	const fullScreenNavbarRef = useCursorOutside(() => {
		handleFullScreenNavbarClose(setShowNavBarFullScreen);
	});
	return (
		<div className="fixed z-20 left-0 right-0 top-0 bottom-0 h-auto bg-black bg-opacity-60">
			<div className="w-full h-full">
				<div className="fixed top-0 right-0 bottom-0 bg-white w-2/3 pt-1 pb-5" ref={fullScreenNavbarRef}>
					<div className="flex justify-end p-2">
						<div onClick={() => handleFullScreenNavbarClose(setShowNavBarFullScreen)}>
							<AiOutlineClose />
						</div>
					</div>
					<Link href="/">
						<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200">Home</button>
					</Link>
					<Link href="/profile/reservations/">
						<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200">Reservations</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBarFullScreen;
