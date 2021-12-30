
/*

Cheers - Pop Up Cancel reservation Component
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import React from "react";


import useCursorOutside from "../../Custom-Hooks/useCursorOutside";

interface CancelReservationPopUpProps {
	setShowCancelReservationPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const CancelReservationPopUp: React.FC<CancelReservationPopUpProps> = ({ setShowCancelReservationPopUp }) => {

	const mainRef = useCursorOutside(() => {
		setShowCancelReservationPopUp((prev) => (prev = !prev));
	});

	return (
		<div ref={mainRef} className="absolute h-12 w-32 rounded-md shadow-lg" style={{ backgroundColor: "#ffff", right: 
		"1rem", top: "0.2rem" }}>
			
			<button className="text-sm m-1 hover:bg-gray-100 active:bg-gray-200 rounded-md">Cancel Reservation</button>

		</div>
	);
};

export default CancelReservationPopUp;
