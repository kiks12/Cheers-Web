import React from "react";

interface CancelReservationPopUpProps {}

const CancelReservationPopUp: React.FC<CancelReservationPopUpProps> = () => {
	return (
		<div
			className="absolute h-12 w-32 rounded-md shadow-lg"
			style={{ backgroundColor: "#ffff", right: "1rem", top: "0.2rem" }}
		>
			<button className="text-sm m-1 hover:bg-gray-100 active:bg-gray-200 rounded-md">
				Cancel Reservation
			</button>
		</div>
	);
};

export default CancelReservationPopUp;
