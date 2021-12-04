import React from "react";

const SortBy: React.FC = () => {
	return (
		<div className="mt-10 w-full">
			<p className="mb-2">Sort By:</p>
			<select className="h-8 w-48 px-2 bg-white border rounded-md text-sm">
				<option>Location</option>
				<option>Reviews</option>
			</select>
		</div>
	);
};

export default SortBy;
