import React from "react";
import { MdStar, MdOutlineLocationOn } from "react-icons/md";

const BarFeed: React.FC = () => {
	return (
		<div className="mt-4 h-28 bg-transparent border hover:border-gray-400 rounded-lg p-2 flex justify-between w-full cursor-pointer relative">
			<div className="flex flex-col flex-1 pr-2">
				<div className=" pb-2">
					<div className="flex items-center">
						<p className="font-semibold text-lg mr-2">Bar Name</p>
						<div className="flex">
							<MdStar color="#FFE769" size={20} />
							<MdStar color="#FFE769" size={20} />
							<MdStar color="#FFE769" size={20} />
							<MdStar color="#FFE769" size={20} />
							<MdStar color="#FFE769" size={20} />
						</div>
					</div>
					<p className="text-sm">Bar</p>
				</div>
				<div className="flex items-center h-8 py-1 font-light text-black pl-2 pb-2 absolute bottom-0 left-0 right-0 z-0 rounded-b-md">
					<MdOutlineLocationOn size={18} color="#2d2d2d" />
					<p className="ml-1 text-sm">1.2 km</p>
					<p className="ml-10 text-sm">200php - 500php</p>
				</div>
			</div>

			<div className="w-48 h-full text-sm bg-black rounded-md text-white flex items-center justify-center lg:flex md:flex sm:hidden z-10">
				image
			</div>
		</div>
	);
};

export default BarFeed;
