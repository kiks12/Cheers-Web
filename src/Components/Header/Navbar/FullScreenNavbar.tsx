
/*

Cheers - Full Screen Navigation bar for small screen
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import { AiOutlineClose } from "react-icons/ai";


import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";


import useCursorOutside from "../../../Custom-Hooks/useCursorOutside";


import { SIGNOUT_CALLBACK_URL } from "../Navbar/navbarConstants";


interface NavBarFullScreenProps {
	setShowNavBarFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
	data: Session | null;
	status: "authenticated" | "unauthenticated" | "loading";
}


const NavBarFullScreen: React.FC<NavBarFullScreenProps> = ({ setShowNavBarFullScreen, data, status }) => {

	const handleFullScreenNavbarClose = () => {
		setShowNavBarFullScreen((prev) => (prev = !prev));
	};


	const fullScreenNavbarRef = useCursorOutside(handleFullScreenNavbarClose);

	
	return (
		<div className="fixed z-20 left-0 right-0 top-0 bottom-0 h-auto bg-black bg-opacity-60">
			
			<div className="w-full h-full">

				<div className="fixed top-0 right-0 bottom-0 bg-white w-2/3 pt-1 pb-5" ref={fullScreenNavbarRef}>

					<div className="flex justify-end p-2">
						<div className="cursor-pointer" onClick={handleFullScreenNavbarClose}>
							<AiOutlineClose />
						</div>
					</div>

					{
						data && 
						(
							<Link href="/profile/settings/" passHref={true}>
								<div className="flex items-center justify-center py-4">
									<div className="h-16 w-16 overflow-hidden rounded-full cursor-pointer"
										 onClick={handleFullScreenNavbarClose}
									>
										<span>
											<Image src={`${data && data?.user?.image}`} 
												alt="profile" 
												width={100} 
												height={100} 
												objectFit="cover"/>
										</span>
									</div>
								</div>
							</Link>
						)
					}

					<Link href="/" passHref={true}>
						<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200"
								onClick={handleFullScreenNavbarClose}
						>
							Home
						</button>
					</Link>

					<Link href="/profile/reservations/" passHref={true}>
						<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200"
								onClick={handleFullScreenNavbarClose}
						>
							Reservations
						</button>
					</Link>

					{
						status === "authenticated" && data && (
						<>
							<Link href="/profile/settings/" passHref={true}>
								<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200"
										onClick={handleFullScreenNavbarClose}
								>
									Account Settings
								</button>
							</Link>

							<button className="py-2 w-full hover:bg-gray-100 active:bg-gray-200"
									onClick={() => signOut({callbackUrl: SIGNOUT_CALLBACK_URL})}
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
