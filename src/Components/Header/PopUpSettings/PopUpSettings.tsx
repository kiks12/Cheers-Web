
/*

Cheers - Pop Up Settings in Navigation Bar
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

/* eslint-disable @next/next/link-passhref */


import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";


import useCursorOutside from "../../../Custom-Hooks/useCursorOutside";


import { SIGNOUT_CALLBACK_URL } from "../Navbar/navbarConstants";


interface SettingsPopUpProps {
	setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}


const SettingsPopUp: React.FC<SettingsPopUpProps> = ({ setShowSettingsPopUp }) => {

	const mainRef = useCursorOutside(() => {
		setShowSettingsPopUp((prev) => (prev = !prev));
	});


	return (
		<div
			ref={mainRef}
			className="absolute w-48 h-auto border p-2 rounded-md shadow-lg lg:top-5 md:top-5 sm:top-10"
			style={{ right: "0.1rem", backgroundColor: "#ffff" }}
		>
			
			<Link href="/profile/settings">
				<button className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all">
					Account Settings
				</button>
			</Link>

			<button 
				className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all"
				onClick={() => signOut({callbackUrl: SIGNOUT_CALLBACK_URL})}>
				Log Out
			</button>

		</div>
	);
};

export default SettingsPopUp;
