
/*

Cheers - Navigation bar Component
Last Update: Jan. 21, 2022
Tolentino, Francis James S.

 */


import { MdSearch, MdArrowDropDown } from "react-icons/md";
import { BsCalendarEvent, BsCalendarEventFill } from "react-icons/bs";
import { AiOutlineHome, AiFillHome} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPeopleOutline, IoPeople} from "react-icons/io5";


import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";


import NavBarFullScreen from "./FullScreenNavbar";
import PopupSettings from "../PopUpSettings/PopUpSettings";
import FloatingSearchBar from "./FloatingSearchBar";


import {
	ACTIVE_NAVBAR_LINK_STYLING,
	INACTIVE_NAVBAR_LINK_STYLING,
	LARGE_SCREEN_ACTIVE_SETTINGS,
	SMALL_SCREEN_ACTIVE_SETTINGS,
} from "./navbarConstants";


interface NavBarProps {
	activePage?: String;
}


const Navhar: React.FC<NavBarProps> = ({ activePage }) => {
	
	const [showPopupSettings, setShowPopupSettings] = useState<boolean>(false);
	const [currentActiveSettings, setCurrentActiveSettings] = useState<number>(0);
	const [showFullScreenNavBar, setShowFullScreenNavBar] = useState<boolean>(false);
	const [showFloatingSearchBar, setShowFloatingSearchBar] = useState<boolean>(false);
	const hamburgerMenuRef = useRef<HTMLDivElement>(null);
	const { data: session, status: status } = useSession();


	// Pop Up Settings on click event
	const popupSettingsOnClickHandler = () => {
		setShowPopupSettings((prev) => (prev = !prev));
		if (document.body.getBoundingClientRect().width <= 767) {
			setCurrentActiveSettings(SMALL_SCREEN_ACTIVE_SETTINGS);
			return;
		}
		setCurrentActiveSettings(LARGE_SCREEN_ACTIVE_SETTINGS);
	};


	// Full Screen Navigation Bar on click event
	const handleFullScreenNavBarClick = () => {
		setShowFullScreenNavBar((prev) => (prev = !prev));
	};


	// Floating Search bar on click event
	const floatingSearchBarIconClassHandler = useMemo(() => {
		if (showFloatingSearchBar) {
			return "lg:hidden md:hidden sm:flex items-center justify-center ml-4 h-8 w-8 rounded-full cursor-pointer bg-gray-200";
		}
		return "lg:hidden md:hidden sm:flex items-center justify-center ml-4 h-8 w-8 rounded-full cursor-pointer";

	}, [showFloatingSearchBar]);


	return (
		<>
			{/* if status is loading render nothing */}
			{status === "loading" ? <></> : 

				(
				<nav className="flex w-full h-12 px-5 items-center border-b justify-between fixed z-20" 
					 style={{ backgroundColor: "white" }}>

					<div className="flex items-center w-2/12">
						
						<Link href="/" passHref={true}>
							<h2 className="text-2xl font-semibold cursor-pointer">
								Cheers.
							</h2>
						</Link>

						<div
							className={floatingSearchBarIconClassHandler}
							onClick={() => setShowFloatingSearchBar(prev => prev = !prev)}
						>
							<MdSearch size={22} />
						</div>

						{
							showFloatingSearchBar && <FloatingSearchBar setShowFloatingSearchBar={setShowFloatingSearchBar}/>
						}
						
					</div>


					<div className="w-1/3 lg:flex md:flex sm:hidden h-full items-center p-2">
						
						<div className="w-full h-full flex bg-red-100">
							
							<input
								className="bg-transparent h-full focus:outline-none text-sm border bg-white pl-2 pr-2"
								style={{ width: "91%" }}
								placeholder="Search"
							/>

							<div className="bg-black w-8 h-full flex-auto cursor-pointer border border-black hover:bg-gray-700 flex items-center justify-center active:bg-gray-500">
								<MdSearch color="#f8f8f8" size={18} />
							</div>

						</div>

					</div>


					<ul className="lg:flex md:flex sm:hidden justify-end lg:w-1/4 md:w-1/3 h-full flex-1">

						<Link href="/" passHref={true}>
							{activePage === "home" ? (
								<li className={ACTIVE_NAVBAR_LINK_STYLING}>
									<AiFillHome size={22} />
								</li>
							) : (
								<li className={INACTIVE_NAVBAR_LINK_STYLING}>
									<AiOutlineHome size={22} />
								</li>
							)}
						</Link>

						<Link href="/profile/reservations" passHref={true}>
							{activePage === "reservations" ? (
								<li className={ACTIVE_NAVBAR_LINK_STYLING}>
									<BsCalendarEventFill size={18} />
								</li>
							) : (
								<li className={INACTIVE_NAVBAR_LINK_STYLING}>
									<BsCalendarEvent size={18} />
								</li>
							)}
						</Link>
						
						<Link href="/community" passHref={true}>
							{activePage === "community" ? (
								<li className={ACTIVE_NAVBAR_LINK_STYLING}>
									<IoPeople size={23} />
								</li>
							) : (
								<li className={INACTIVE_NAVBAR_LINK_STYLING}>
									<IoPeopleOutline size={23} />
								</li>
							)}
						</Link>
						
					</ul>


					<div className="items-center lg:flex md:flex sm:hidden flex-1 justify-end">
						{session && status === "authenticated" ? (
							<>
								<Link href="/profile/settings" passHref={true}>
									<div
										className="flex items-center cursor-pointer hover:bg-gray-200 p-1 rounded-md transition-all active:bg-gray-400 md:hidden lg:flex"
									>
										<div className="rounded-full h-8 w-8 lg:mr-2 overflow-hidden">
											<span>
												{session && (
													<Image
														src={`${session.user && session.user.image}`}
														alt="profile"
														width={40}
														height={40}
														objectFit="cover"
													/>
												)}
											</span>
										</div>
										<p className="text-sm">{session.user && session.user.name}</p>
									</div>
								</Link>
								<div className="flex items-center relative">
									<div
										className="ml-3 w-8 h-8 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-100 transition-all flex items-center justify-center"
										onClick={popupSettingsOnClickHandler}
									>
										<MdArrowDropDown size={24} />
									</div>
									{showPopupSettings && currentActiveSettings === 0 && (
										<PopupSettings setShowPopupSettings={setShowPopupSettings} />
									)}
								</div>
							</>
						) : (
							<>
								<p className="text-sm">Guest</p>
								<Link href="/login" passHref={true}>
									<p className="text-sm rounded-md ml-4 cursor-pointer hover:bg-black active:bg-gray-700 hover:text-white transition-all p-1 px-3 border-black border">
										Log in
									</p>
								</Link>
							</>
							)
						}
					</div>

					<div className="lg:hidden md:hidden sm:flex items-center">

						{
							showFullScreenNavBar && 
							(
								<NavBarFullScreen 
									setShowNavBarFullScreen={setShowFullScreenNavBar} 
									data={session}
									status={status}/>
							)
						}
						
						<div
							ref={hamburgerMenuRef}
							className="cursor-pointer rounded-md transition-all"
							onClick={handleFullScreenNavBarClick}
							>
							<GiHamburgerMenu size={24} />
						</div>
						
						{
							status === "unauthenticated" && 
							(
								<Link href="/login" passHref={true}>
									<p className="text-sm rounded-md cursor-pointer hover:bg-black active:bg-gray-700 hover:text-white transition-all p-1 px-3 border-black border ml-3">
										Log in
									</p>
								</Link>
							) 
						}
		
					</div>
				</nav>

				)
			}
		</>
	);
};

export default Navhar;
