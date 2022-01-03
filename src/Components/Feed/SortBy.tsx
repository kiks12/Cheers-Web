
/*

Cheers - Sort by Component
Last Updated: Jan. 3, 2022
Tolentino, Francis James S.

*/


import React from "react";


const SortBy: React.FC = () => {
	
	return (
		<div className="mt-10 w-full">
			<p className="mb-2">Sort By:</p>
			<select className="h-8 lg:w-48 md:w-48 sm:w-full px-2 bg-white border rounded-md text-sm">
				<option>Location</option>
				<option>Reviews</option>
			</select>
		</div>
	);
};

export default SortBy;
