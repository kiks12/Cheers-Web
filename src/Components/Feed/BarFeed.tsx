/* eslint-disable @next/next/link-passhref */

/*

Cheers - Bar Feed Component
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import { MdStar, MdOutlineLocationOn } from "react-icons/md";


import Link from "next/link";
import React from "react";



const BarFeed: React.FC= () => {

	const BARNAME = "adsfasdf";
	const IS_FEATURED = false;

	return (
		<Link href={`/${BARNAME}/${IS_FEATURED ? 1 : 0}`}>
			
			<div className="mt-2 h-28 bg-transparent border hover:border-gray-400 flex justify-between w-full cursor-pointer relative">

				<div className="w-48 h-full text-sm bg-black text-white flex items-center justify-center lg:flex md:flex sm:hidden z-10">
					image
				</div>

				<div className="flex flex-col flex-1 p-2 justify-between wrap">

					<div className=" pb-2">
						<div className="flex items-center">
							<p className="mr-2">Bar Name</p>
							<div className="flex">
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
							</div>
						</div>
						<p className="text-sm">Type: Bar</p>
					</div>

					<div className="flex flex-col justify-start text-gray-400">
						<div className="flex flex-row items-center">
							<MdOutlineLocationOn size={17} color="gray" />
							<p className="ml-1 text-sm">1.2 km</p>
						</div>
						<p className="ml-2 text-sm">200php - 500php</p>
					</div>
					
				</div>
				

			</div>

		</Link>
	);
};

export default BarFeed;
