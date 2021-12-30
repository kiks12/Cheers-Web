
/*

Cheers - Review Component
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import { BsThreeDots } from "react-icons/bs";
import { MdStar } from "react-icons/md";


import React from "react";


const Review: React.FC = () => {
	
	return (
		<div className="w-full h-auto break-words p-3 border mt-3 rounded-md wrap">
			<div className="w-full flex justify-between">
				<div className="flex items-center">
					<p>User</p>
					<div className="flex ml-1">
						<MdStar color="#FFE769" size={18} />
						<MdStar color="#FFE769" size={18} />
						<MdStar color="#FFE769" size={18} />
						<MdStar color="#FFE769" size={18} />
						<MdStar color="#FFE769" size={18} />
					</div>
				</div>
				<BsThreeDots />
			</div>

			<div className="mt-2">
				<p className="font-light">
					ssahdkjfgsadkufgsdafkuasahdkjfgsadkufgsdafkuasahdkjfgsadkufgsdafkuasahdkjfgsadkufgsdafkuasahdkjfgsadkufgsdafkuaahdkjfgsadkufgsdafkua
				</p>
			</div>
		</div>
	);
};

export default Review;
