import React from "react";
import { MdStar, MdOutlineLocationOn } from "react-icons/md";

const BarFeed: React.FC = () => {
  return (
    <div className="mt-4 h-28 bg-white border rounded-lg p-2 flex justify-between w-full">
      <div className="flex flex-col flex-1 pr-2">
        <div className="border-b">
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
          <p className="text-md">Bar</p>
        </div>
        <div className="flex items-center h-full">
          <MdOutlineLocationOn size={19} color="gray" />
          <p className="text-gray-400 ml-1">1.2 km</p>
          <p className="text-gray-400 ml-10">200php - 500php</p>
        </div>
      </div>

      <div className="w-48 h-full bg-black rounded-md text-white flex items-center justify-center">
        image
      </div>
    </div>
  );
};

export default BarFeed;
