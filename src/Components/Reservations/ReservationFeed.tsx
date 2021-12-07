import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import CancelReservationPopUp from "./CancelReservationPopUp";

interface ReservationFeedProps {}

const ReservationFeed: React.FC<ReservationFeedProps> = () => {
	const [showCancelReservation, setShowCancelReservation] = useState<boolean>(false);

	return (
		<div className="w-full h-24 my-3 rounded-md p-3 border flex justify-between">
			<div className="flex-col">
				<p className="text-md font-semibold">Bar name</p>
				<p className="text-sm">Time</p>
			</div>

			<div className="flex flex-col justify-between">
				<div className="w-full flex justify-end cursor-pointer relative">
					{showCancelReservation && <CancelReservationPopUp setShowCancelReservationPopUp={setShowCancelReservation} />}

					<div onClick={() => setShowCancelReservation((prev) => (prev = !prev))}>
						<BsThreeDots />
					</div>
				</div>
				<button className="bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 py-1 px-5 rounded-md text-sm">View Details</button>
			</div>
		</div>
	);
};

export default ReservationFeed;
