
/*

Cheers - Single Bar page header/bar
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import { MdStar } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { useActivePage } from "../../Custom-Hooks/useActivePage";


import React from "react";
import Link from "next/dist/client/link";


import OverviewPhotosReviewsEventsBar from "./OverviewPhotosReviewsEventsBar";


interface PageBarProps {
  barName: string | string[] | undefined;
  isFeatured: boolean;
  active: string;
}


const PageBar: React.FC<PageBarProps> = ({ barName, isFeatured, active }) => {

  const [_activePage, setActivePage] = useActivePage();
  
  return (
    <>
      <div className='w-full flex flex-col mt'>
        
        <div className='w-full'>

          <Link href='/'>
            <button
              className='font-light border-black border px-5 py-1 text-sm rounded-md hover:bg-black hover:text-white transition-all flex items-center'
              onClick={() => setActivePage("home")}>
              <div className='w-auto h-auto mr-1'>
                <BsArrowLeft size={18} />
              </div>
              Go Back
            </button>
          </Link>

        </div>

        <div className='w-full flex justify-between mt-6 lg:items-end md:items-end sm:items-center lg:flex-row md:flex-row sm:flex-col'>
          <div className='flex flex flex-col lg:w-auto md:w-auto sm:w-full'>
            <div className='flex items-center'>
              <h1 className='font-bold text-4xl'>{barName}</h1>
              <div className='flex ml-3'>
                <MdStar size={20} color='#FFE769' />
                <MdStar size={20} color='#FFE769' />
                <MdStar size={20} color='#FFE769' />
                <MdStar size={20} color='#FFE769' />
                <MdStar size={20} color='#FFE769' />
              </div>
            </div>
            <div>
              {isFeatured && <p className='font-light'>Featured by Cheers</p>}
            </div>
          </div>

          <div className='lg:w-auto md:w-auto sm:w-full'>
            <button className='bg-black text-white py-2 px-5 text-sm font-light rounded-md hover:bg-gray-700 transition-all w-full lg:mt-0 md:mt-0 sm:mt-4'>
              Create Reservation
            </button>
          </div>
        </div>
      </div>

      <OverviewPhotosReviewsEventsBar active={active} />
    </>
  );
};

export default PageBar;