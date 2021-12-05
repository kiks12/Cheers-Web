import React from "react";

export const handleSettingsPopUpClick = (setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>) => {
	setShowSettingsPopUp((prev) => (prev = !prev));
};

export const handleSettingsPopUpClose = (setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>) => {
	setShowSettingsPopUp((prev) => (prev = false));
};
