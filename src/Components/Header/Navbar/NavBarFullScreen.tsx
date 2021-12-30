
/*

Cheers - Full Screen Navigation bar for small screen
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import React from "react";
import Link from "next/link";
import useCursorOutside from "../../../Custom-Hooks/useCursorOutside";
import { AiOutlineClose } from "react-icons/ai";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";


interface NavBarFullScreenProps {
	setShowNavBarFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
	data: Session | null;
	status: "authenticated" | "unauthenticated" | "loading";
}


const NavBarFullScreen: React.FC<NavBarFullScreenProps> = ({ setShowNavBarFullScreen, data, status }) => {

	const fullScreenNavbarRef = useCursorOutside(() => {
		handleFullScreenNavbarClose();
	});

	const handleFullScreenNavbarClose = () => {
		setShowNavBarFullScreen((prev) => (prev = !prev));
	};

	return (
		<div className="fixed z-20 left-0 right-0 top-0 bottom-0 h-auto bg-black bg-opacity-60">
			
			<div className="w-full h-full">

				<div className="fixed top-0 right-0 bottom-0 bg-white w-2/3 pt-1 pb-5" ref={fullScreenNavbarRef}>

					<div className="flex justify-end p-2">
						<div onClick={handleFullScreenNavbarClose}>
							<AiOutlineClose />
						</div>
					</div>

					<Link href="/">
						<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200">Home</button>
					</Link>

					<Link href="/profile/reservations/">
						<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200">Reservations</button>
					</Link>

					{
						status === "authenticated" && data && (
						<>
							<Link href="/profile/settings/">
								<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200">Account Settings</button>
							</Link>

							<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200"
									onClick={() => signOut({callbackUrl: "http://localhost:3000/login"})}
									>
								Log Out
							</button>
						</>
						)
					}
					
				</div>

			</div>

		</div>
	);
};

export default NavBarFullScreen;
