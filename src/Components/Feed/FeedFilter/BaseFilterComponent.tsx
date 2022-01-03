
/*

Cheers - Base Filter Component (Filter component that handles the ui button rendering)
Last Updated: Jan. 3, 2022
Tolentino, Francis James S.

*/


import React from "react";


interface FilterComponentProps {
	showCancel: boolean;
	setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ setShowFilterModal }) => {

	
	return (
		<div className="flex flex-1 lg:flex-row md:flex-col md:w-full sm:flex-col sm:w-full justify-between">

			<div className="flex lg:flex-row lg:items-end lg:justify-between lg:w-3/4 md:flex-col md:w-full sm:flex-col sm:w-full">
				<div className="flex-1 lg:mr-5 md:mr-0 sm:mr-0 flex flex-col justify-between h-full">
					<p className="font-semibold mb-2">Type</p>
					<select className="w-full h-8 bg-white border rounded-md px-2 text-sm">
						<option>Both</option>
						<option>Bars</option>
						<option>Clubs</option>
					</select>
				</div>

				<div className="flex-1 lg:mr-5 md:mr-0 lg:mt-0 md:mt-5 sm:mt-5 flex flex-col justify-between h-full">
					<p className="font-semibold mb-2">Reviews</p>
					<select className="w-full h-8 bg-white border rounded-md px-2 text-sm">
						<option>All</option>
						<option>5 Stars</option>
						<option>4 Stars</option>
						<option>3 Stars</option>
						<option>2 Stars</option>
						<option>1 Star</option>
					</select>
				</div>

				<div className="flex-1 lg:mr-5 md:mr-0 lg:mt-0 md:mt-5 sm:mt-5 flex flex-col justify-between h-full">
					<p className="font-semibold mb-2">Location</p>
					<select className="w-full h-8 bg-white border rounded-md px-2 text-sm">
						<option>Near Me</option>
						<option>Bars</option>
						<option>Clubs</option>
					</select>
				</div>

				<div className="flex-1 lg:mt-0 md:mt-5 sm:mt-5">
					<p className="font-semibold mb-2">Price Range</p>
					<p className="text-sm">P100.00</p>
					<input type="range" className="w-full slider" min="50" max="1000" />
				</div>
			</div>

			<div className="lg:w-1/4 lg:pl-5">
				<div className="flex lg:w-full md:w-full sm:w-full items-end justify-end md:mt-10 sm:mt-10">
					<button className="w-full bg-black text-white font-light h-8 rounded-md hover:bg-gray-700 transition-all text-sm">Apply</button>
				</div>

				<div className="flex items-center justify-center lg:hidden">
					<button
						className="w-full border border-red-400 text-red-400 font-light h-8 rounded-md hover:bg-red-400 hover:text-white mt-2 transition-all text-sm"
						onClick={() => setShowFilterModal(false)}
					>
						Cancel
					</button>
				</div>
			</div>

		</div>
	);
};

export default FilterComponent;
