
/*

Cheers - Reservations Header Component
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


import React, { useState } from "react";
import SortBy from "../SortByComponent/SortBy";


interface ReservationsHeaderProps {}

type SortByValues = "Alphabetical" | "Latest" | "Specific Date";


const ALPHABETICAL : SortByValues = "Alphabetical";
const LATEST : SortByValues = "Latest";
const SPECIFIC_DATE : SortByValues = "Specific Date";


const SORTING_VALUES = [ALPHABETICAL, LATEST, SPECIFIC_DATE];


const ReservationsHeader: React.FC<ReservationsHeaderProps> = () => {

	const [sortBy, setSortBy] = useState<SortByValues>(() => SORTING_VALUES[0]);

	const sortingHandler = (e: any, setter: React.Dispatch<string>) => {
		setter(e.target.value);
		setSortBy(e.target.value);
	};
	

	return (
		<div className="w-full mb-5">

			<h1 className="font-semibold text-xl mb-5">Reservations</h1>

			<div className="flex lg:flex-col md:flex-col sm:flex-col justify-start">


				<div className="md:flex-row lg:flex-row lg:w-1/3 md:w-2/3 py-2 sm:flex md:flex lg:flex">
					<input className="bg-white border lg:w-100 md:w-100 sm:w-full p-1 text-sm py-1 px-2" 
						   placeholder="Search Reservation" />

					<button className="bg-black hover:bg-gray-700 active:bg-gray-400 text-white px-6 py-1 border border-black text-sm lg:mt-0 md:mt-0 sm:mt-2 ">
						Search
					</button>
				</div>


				<div className="flex lg:flex-row md:flex-row sm:flex-col w-100 mt-5">

					<div className="lg:w-1/4 sm:w-100 lg:mr-5 md:mr-5 sm:mr-0 ">
						<SortBy values={SORTING_VALUES} handler={sortingHandler}/>
					</div>


					{
						sortBy === SPECIFIC_DATE && (
							<div className="flex flex-col lg:mt-0 md:mt-0 sm:mt-3 py-2">
								<p className="mr-3 font-light ">Select Date: </p>
								<input type="date" className="bg-white border text-sm py-1 px-2 mt-2" />
							</div>
						)
					}
				
				</div>


			</div>
		</div>
	);
};

export default ReservationsHeader;
