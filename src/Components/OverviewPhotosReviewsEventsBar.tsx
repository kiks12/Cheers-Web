import Link from "next/dist/client/link";


const OverviewPhotosReviewsEventsBar = ({active}) => {
    return (
        <nav className="w-full border-t border-b mt-2 flex items-center justify-center">
            <ul className="flex h-full">

                <Link href="/page/Bar-name/overview">
                    {
                        active === "overview" ? 
                    
                        <li className="h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer">
                            Overview
                        </li>
                        :
                        <li className="h-full flex items-center py-1 border-b-4 border-transparent justify-center px-5 text-sm font-light cursor-pointer">
                            Overview
                        </li>
                    }
                </Link>

                <Link href="/page/Bar-name/photos">
                    {
                        active === "photos" ? 
                    
                        <li className="h-full flex items-center justify-center px-5 py-1 border-b-4 border-black text-sm font-light cursor-pointer">
                            Photos 
                        </li>
                        :
                        <li className="h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer">
                            Photos
                        </li>
                    }
                </Link>

                <Link href="/page/Bar-name/reviews">
                    {
                        active === "reviews" ? 
                    
                        <li className="h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer">
                            Reviews 
                        </li>
                        :
                        <li className="h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer">
                            Reviews
                        </li>
                    }
                </Link>

                <Link href="/page/Bar-name/upcoming-events">
                    {
                        active === "upcomingEvents" ? 
                    
                        <li className="h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer">
                            Upcoming Events 
                        </li>
                        :
                        <li className="h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer">
                            Upcoming Events
                        </li>
                    }
                </Link>
            </ul>
        </nav>
    )
}

export default OverviewPhotosReviewsEventsBar;