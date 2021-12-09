import React from "react";
import Link from "next/dist/client/link";

interface OPREBarProps {
  active: string;
}

const OverviewPhotosReviewsEventsBar: React.FC<OPREBarProps> = ({ active }) => {
  return (
    <nav className='w-full h-8 border-t border-b mt-2 flex items-center justify-center  sm:relative'>
      <ul className='flex h-full lg:w-1/2 md:w-2/3 items-center mx-auto justify-center md:static sm:absolute sm:top-0 sm:left-0 sm:bottom-0'>
        <Link href='/Bar-name/0/'>
          {active === "overview" ? (
            <li className='h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer flex-1'>
              Overview
            </li>
          ) : (
            <li className='h-full flex items-center py-1 border-b-4 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1'>
              Overview
            </li>
          )}
        </Link>

        <Link href='/Bar-name/0/photos'>
          {active === "photos" ? (
            <li className='h-full flex items-center justify-center px-5 py-1 border-b-4 border-black text-sm font-light cursor-pointer flex-1'>
              Photos
            </li>
          ) : (
            <li className='h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1'>
              Photos
            </li>
          )}
        </Link>

        <Link href='/Bar-name/0/reviews'>
          {active === "reviews" ? (
            <li className='h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer flex-1'>
              Reviews
            </li>
          ) : (
            <li className='h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1'>
              Reviews
            </li>
          )}
        </Link>

        <Link href='/Bar-name/0/upcoming-events'>
          {active === "upcomingEvents" ? (
            <li className='h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer flex-1 whitespace-nowrap'>
              Upcoming Events
            </li>
          ) : (
            <li className='h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1 whitespace-nowrap'>
              Upcoming Events
            </li>
          )}
        </Link>
      </ul>
    </nav>
  );
};

export default OverviewPhotosReviewsEventsBar;
