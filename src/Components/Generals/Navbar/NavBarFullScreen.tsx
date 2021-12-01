import React from "react";
import Link from "next/link";

interface NavBarFullScreenProps {}

const NavBarFullScreen: React.FC<NavBarFullScreenProps> = () => {
	return (
		<div
			className="fixed z-20 left-0 right-0 h-auto shadow-lg p-1"
			style={{ top: "3rem", backgroundColor: "#ffff" }}
		>
			<Link href="/">
				<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200">
					Home
				</button>
			</Link>
			<Link href="/profile/reservations/">
				<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200">
					Reservations
				</button>
			</Link>
		</div>
	);
};

export default NavBarFullScreen;
