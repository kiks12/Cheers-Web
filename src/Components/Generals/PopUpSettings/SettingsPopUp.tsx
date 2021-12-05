import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import useCursorPosition from "../../../Custom-Hooks/useCursorPosition";
import { settingsPopUpEventRemover } from "../PopUpSettings/PopUpSettingsHandlers";

interface SettingsPopUpProps {
	setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SettingsDimensions {
	top: number;
	bottom: number;
	left: number;
	right: number;
}

const SettingsPopUp: React.FC<SettingsPopUpProps> = ({ setShowSettingsPopUp }) => {
	const popUpSettingsRef = useRef<HTMLDivElement>(null);
	const [settingsDimension, setSettingsDimension] = useState<SettingsDimensions>({
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	});
	const [cursor] = useCursorPosition();

	useEffect(() => {
		if (!popUpSettingsRef.current) return;
		const popUpSettingsPosition = popUpSettingsRef.current.getBoundingClientRect();
		setSettingsDimension((prev) => {
			return (prev = {
				top: popUpSettingsPosition.top,
				bottom: popUpSettingsPosition.bottom,
				right: popUpSettingsPosition.right,
				left: popUpSettingsPosition.left,
			});
		});
	}, [popUpSettingsRef.current]);

	useEffect(() => {
		document.addEventListener(
			"click",
			settingsPopUpEventRemover.bind(null, {
				yAxis: cursor.yAxis,
				xAxis: cursor.xAxis,
				setShowSettingsPopUp: setShowSettingsPopUp,
				settingsDimensions: settingsDimension,
			})
		);

		return () => {
			document.removeEventListener(
				"click",
				settingsPopUpEventRemover.bind(null, {
					yAxis: cursor.yAxis,
					xAxis: cursor.xAxis,
					setShowSettingsPopUp: setShowSettingsPopUp,
					settingsDimensions: settingsDimension,
				})
			);
		};
	}, [cursor]);

	useEffect(() => {
		console.log();
	}, []);

	return (
		<div
			ref={popUpSettingsRef}
			className="absolute w-48 h-auto border p-2 rounded-md shadow-lg lg:top-5 md:top-5 sm:top-10"
			style={{ right: "0.1rem", backgroundColor: "#ffff" }}
		>
			<button className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all">
				Account Settings
			</button>
			<Link href="/login">
				<button className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all">
					Log Out
				</button>
			</Link>
		</div>
	);
};

export default SettingsPopUp;
