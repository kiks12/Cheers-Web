/* eslint-disable @next/next/link-passhref */

/*

Cheers - Bar Feed Component
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import { MdStar, MdOutlineLocationOn } from "react-icons/md";


import Link from "next/link";
import React from "react";
import Image from "next/image";


interface BarFeedProps {
	barID: number;
	barName: string;
	image: string;
	type: string;
	location: string;
	priceRange: string;
}



const BarFeed: React.FC<BarFeedProps> = ({ barName, image, location, priceRange, type }) => {


	return (
		<Link href={`/${barName}`}>
			
			<div className="mt-2 h-28 bg-transparent border hover:border-gray-400 flex justify-between w-full cursor-pointer relative">

				<div className="w-48 h-full text-sm bg-black text-white flex items-center justify-center lg:flex md:flex sm:hidden z-10 overflow-hidden">
					<Image src={image} width={220} height={150}/>
				</div>

				<div className="flex flex-col flex-1 p-2 justify-between wrap">

					<div className=" pb-2">
						<div className="flex items-center">
							<p className="mr-2">{barName}</p>
							<div className="flex">
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
								<MdStar color="#FFE769" size={20} />
							</div>
						</div>
						<p className="text-sm">Type: {type}</p>
					</div>

					<div className="flex flex-col justify-start text-gray-400">
						<div className="flex flex-row items-center">
							<MdOutlineLocationOn size={17} color="gray" />
							<p className="ml-1 text-sm">{location}</p>
						</div>
						<p className="ml-2 text-sm">{priceRange}</p>
					</div>
					
				</div>
				

			</div>

		</Link>
	);
};

export default BarFeed;
