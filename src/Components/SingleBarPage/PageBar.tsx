import React from "react";
import Link from "next/dist/client/link";
import OverviewPhotosReviewsEventsBar from "./OverviewPhotosReviewsEventsBar";
import { MdStar } from "react-icons/md";
import {BsArrowLeft} from "react-icons/bs";

interface PageBarProps {
    barName: string | string[] | undefined;
    isFeatured: boolean;
    active: string;
}

const PageBar : React.FC<PageBarProps> = ({barName, isFeatured, active}) => {

    return(
        <>
            <div className="w-full flex flex-col mt">
                <div className="w-full">
                    <Link href="/">
                        <button className="font-light border-black border px-5 py-1 text-sm rounded-md hover:bg-black hover:text-white transition-all flex items-center">
                            <div className="w-auto h-auto mr-1">
                                <BsArrowLeft size={18} />
                            </div>
                            Go Back
                        </button>
                    </Link>
                </div>

                <div className="w-full flex justify-between mt-6 items-end">
                    <div className="flex flex flex-col">
                        <div className="flex items-center">
                            <h1 className="font-bold text-4xl">{barName}</h1>
                            <div className="flex ml-3">
                                <MdStar size={20} color="#FFE769"/>
                                <MdStar size={20} color="#FFE769"/>
                                <MdStar size={20} color="#FFE769"/>
                                <MdStar size={20} color="#FFE769"/>
                                <MdStar size={20} color="#FFE769"/>
                            </div>
                        </div>
                        <div>
                            {isFeatured && <p className="font-light">Featured by Cheers</p>}
                        </div>
                    </div>

                    <div>
                        <button className="bg-black text-white py-2 px-5 text-sm font-light rounded-md hover:bg-gray-700 transition-all">
                            Create Reservation
                        </button>
                    </div>
                </div>
            </div>

            <OverviewPhotosReviewsEventsBar active={active}/>
        </> 
    )   
}


export default PageBar;