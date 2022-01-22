
/*

Cheers - One Bar Page OPRE Bar Component
Last Updated: Jan. 22, 2022 
Tolentino, Francis James S.

*/


import React, { useEffect, useRef } from "react";


interface OPREBarProps {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
}


const OverviewPhotosReviewsEventsBar: React.FC<OPREBarProps> = ({ active, setActive}) => {

	const navbarRef = useRef<HTMLElement | null>(null);
	const ulRef = useRef<HTMLUListElement | null>(null);


	const uListLeftIsLessThanNavbarLeft = () => {
		if (navbarRef.current && ulRef.current){
			return navbarRef.current?.getBoundingClientRect().left > ulRef.current?.getBoundingClientRect().left;
		}

		return false;
	}


	const uListRightIsGreaterThanNavbarRight = () => {
		if (navbarRef.current && ulRef.current){
			return ulRef.current?.getBoundingClientRect().right > navbarRef.current?.getBoundingClientRect().right;
		}

		return false;
	}


	const navbarAndUListRelationHandler = () => {
		if (navbarRef.current && ulRef.current){
			if (uListLeftIsLessThanNavbarLeft() && uListRightIsGreaterThanNavbarRight()){
				ulRef.current.classList.add("sm:left-0");
				return;
			} 
			ulRef.current.classList.remove("sm:left-0");
			console.log("removing");
		}	
	}


	useEffect(() => {
		navbarAndUListRelationHandler();
	}, [navbarRef, ulRef]);


	useEffect(() => {
		window.addEventListener("resize", navbarAndUListRelationHandler);

		return () => window.removeEventListener("resize", navbarAndUListRelationHandler);
	}, [navbarRef, ulRef]);


	return (
		<nav ref={navbarRef} className="w-full h-8 border-t border-b mt-2 flex justify-center sm:overflow-x-auto sm:relative">
			
			<ul ref={ulRef} className="flex h-full lg:w-1/2 md:w-2/3 items-center md:container md:mx-auto md:static sm:absolute sm:top-0 sm:bottom-0 justify-center">

				{active === "overview" ? (
					<li className="h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer flex-1" onClick={() => setActive("overview")}>
						Overview
					</li>
				) : (
					<li className="h-full flex items-center py-1 border-b-4 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1" onClick={() => setActive("overview")}>
						Overview
					</li>
				)}


				{active === "photos" ? (
					<li className="h-full flex items-center justify-center px-5 py-1 border-b-4 border-black text-sm font-light cursor-pointer flex-1" onClick={() => setActive("photos")}>
						Photos
					</li>
				) : (
					<li className="h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1" onClick={() => setActive("photos")}>
						Photos
					</li>
				)}


				{active === "reviews" ? (
					<li className="h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer flex-1" onClick={() => setActive("reviews")}>
						Reviews
					</li>
				) : (
					<li className="h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1" onClick={() => setActive("reviews")}>
						Reviews
					</li>
				)}


				{active === "upcomingEvents" ? (
					<li className="h-full flex items-center justify-center py-1 px-5 border-b-4 border-black text-sm font-light cursor-pointer flex-1 whitespace-nowrap" onClick={() => setActive("upcomingEvents")}>
						Upcoming Events
					</li>
				) : (
					<li className="h-full flex items-center border-b-4 py-1 border-transparent justify-center px-5 text-sm font-light cursor-pointer flex-1 whitespace-nowrap" onClick={() => setActive("upcomingEvents")}>
						Upcoming Events
					</li>
				)}

			</ul>

		</nav>
	);
};

export default OverviewPhotosReviewsEventsBar;
