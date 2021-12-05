import Link from "next/link";
import React, { useEffect, useRef } from "react";
import useCursorOutside from "../../../Custom-Hooks/useCursorOutside";

interface SettingsPopUpProps {
	setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsPopUp: React.FC<SettingsPopUpProps> = ({ setShowSettingsPopUp }) => {
	// const popUpSettingsRef = useRef<HTMLDivElement>(null);

	const popUpSettingsRef = useCursorOutside(() => {
		setShowSettingsPopUp((prev) => (prev = !prev));
	});

	return (
		<div
			ref={popUpSettingsRef}
			className="absolute w-48 h-auto border p-2 rounded-md shadow-lg lg:top-5 md:top-5 sm:top-10"
			style={{ right: "0.1rem", backgroundColor: "#ffff" }}
		>
			{/* <Link href="/profile/settings"> */}
			<button className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all">
				Account Settings
			</button>
			{/* </Link> */}
			{/* <Link href="/login"> */}
			<button className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all">
				Log Out
			</button>
			{/* </Link> */}
		</div>
	);
};

export default SettingsPopUp;
