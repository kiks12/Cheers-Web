
/*

Cheers - Reservations Header Component
Last Updated: Jan. 4, 2022
Tolentino, Francis James S.

*/


import React, { useState } from "react";


interface ReservationsHeaderProps {}

type SortByValues = "Alphabetical" | "Latest" | "Specific Date";


const ALPHABETICAL : SortByValues = "Alphabetical";
const LATEST : SortByValues = "Latest";
const SPECIFIC_DATE : SortByValues = "Specific Date";


const ReservationsHeader: React.FC<ReservationsHeaderProps> = () => {

	const [sortBy, setSortBy] = useState<any>("Alphabetical");

	const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
	};
	

	return (
		<div className="w-full mb-5">

			<h1 className="font-semibold text-xl mb-5">Reservations</h1>

			<div className="flex justify-between lg:flex-row md:flex-row sm:flex-col">
				

				{/* large to medium screen */}


				<div className="lg:flex md:flex lg:flex-row md:flex-row sm:flex-col lg:mr-5 md:mr-5 sm:mr-0 lg:items-center md:items-center sm:hidden">
					<p className="mr-3 font-light text-sm">Sort By:</p>
					<select
						className="bg-white border rounded-md py-1 px-3 text-sm"
						value={sortBy}
						onChange={handleSortByChange}
					>
						<option value={ALPHABETICAL}>Alphabetical</option>
						<option value={LATEST}>Latest</option>
						<option value={SPECIFIC_DATE}>Specific Date</option>
					</select>
				</div>


				{
					sortBy === SPECIFIC_DATE && (
						<div className="lg:flex md:flex sm:hidden lg:flex-row md:flex-row sm:flex-col lg:items-center md:items-center lg:mt-0 md:mt-0 sm:mt-3">
							<p className="mr-3 font-light text-sm">Select Date</p>
							<input type="date" className="bg-white border text-sm py-1 px-2 rounded-md" />
						</div>
					)
				}


				{/*  */}


				<div className="lg:flex-1 md:flex-1 sm:w-full flex lg:flex-row md:flex-row sm:flex-col justify-end">
					<input className="bg-white border rounded-md lg:w-72 md:w-72 sm:w-full p-1 mr-3 text-sm py-1" placeholder="Search Reservation" />

					<button className="bg-black hover:bg-gray-700 active:bg-gray-400 text-white px-6 py-1 border border-black text-sm rounded-md ;lg:mt-0 md:mt-0 sm:mt-2 ">
						Search
					</button>
				</div>


				{/* small screen */}


				<div className="flex flex-col mt-2 lg:hidden md:hidden">
					<p className="mr-3 font-light text-sm">Sort By:</p>
					<select
						className="bg-white border rounded-md py-1 px-3 text-sm"
						value={sortBy}
						onChange={handleSortByChange}
					>
						<option value={ALPHABETICAL}>Alphabetical</option>
						<option value={LATEST}>Latest</option>
						<option value={SPECIFIC_DATE}>Specific Date</option>
					</select>
				</div>
				
				
				{
					sortBy === SPECIFIC_DATE && (
						<div className="lg:hidden md:hidden flex flex-col mt-3">
							<p className="mr-3 font-light text-sm">Select Date</p>
							<input type="date" className="bg-white border text-sm py-1 px-2 rounded-md" />
						</div>
					)
				}


				{/*  */}

			</div>
		</div>
	);
};

export default ReservationsHeader;
