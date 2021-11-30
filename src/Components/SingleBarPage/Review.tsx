import React from "react";
import {BsThreeDots} from "react-icons/bs";
import { MdStar } from "react-icons/md";

const Review : React.FC = () => {
    return(
        <div className="w-full h-auto p-3 border mt-3 rounded-md">
            <div className="w-full flex justify-between">
                <div className="flex items-center">
                    <p>User</p>
                    <div className="flex ml-1">
                        <MdStar color="#FFE769" size={18}/>
                        <MdStar color="#FFE769" size={18}/>
                        <MdStar color="#FFE769" size={18}/>
                        <MdStar color="#FFE769" size={18}/>
                        <MdStar color="#FFE769" size={18}/>
                    </div>
                </div>
                <BsThreeDots />                
            </div>

            <div className="mt-2">
                <p className="font-light">sahdkjfgsadkufgsdafkua</p>
            </div>
        </div>
    )
}

export default Review;