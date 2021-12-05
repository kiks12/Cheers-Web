import React from "react";

interface SettingsDimensions {
	top: number;
	bottom: number;
	left: number;
	right: number;
}

interface SettingsPopUpEventRemover {
	xAxis: number;
	yAxis: number;
	settingsDimensions: SettingsDimensions;
	setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleSettingsPopUpClick = (setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>) => {
	setShowSettingsPopUp((prev) => (prev = !prev));
};

export const handleSettingsPopUpClose = (setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>) => {
	setShowSettingsPopUp((prev) => (prev = false));
};

const isInsideYAxisBoundary = (yAxis: number, top: number, bottom: number) => {
	return yAxis <= top && yAxis >= bottom;
};

const isInsideXAxisBoundary = (xAxis: number, left: number, right: number) => {
	return xAxis >= left && xAxis <= right;
};

export const settingsPopUpEventRemover: (args: SettingsPopUpEventRemover) => void = ({ xAxis, yAxis, settingsDimensions, setShowSettingsPopUp }) => {
	const { top, bottom, left, right } = settingsDimensions;
	if (isInsideYAxisBoundary(yAxis, top, bottom) && isInsideXAxisBoundary(xAxis, left, right)) {
		console.log("Y: ", yAxis, " X: ", xAxis);
		console.log("do nothing");
		return;
	} else {
		// handleSettingsPopUpClose(setShowSettingsPopUp);
		console.log("remove");
		document.removeEventListener(
			"click",
			settingsPopUpEventRemover.bind(null, {
				xAxis: xAxis,
				yAxis: yAxis,
				settingsDimensions: settingsDimensions,
				setShowSettingsPopUp: setShowSettingsPopUp,
			})
		);
		return;
	}
};
