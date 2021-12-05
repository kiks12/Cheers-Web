import React, { useRef, useState } from "react";
import { MdOutlineHome, MdCalendarToday, MdSearch, MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SettingsPopUp from "../PopUpSettings/SettingsPopUp";
import NavBarFullScreen from "./NavBarFullScreen";
import FloatingSearchBar from "./FloatingSearchBar";

interface NavBarProps {
	activePage?: string;
}

const ACTIVE_NAVBAR_LINK_STYLING = "lg:w-1/5 md:w-1/4 border-b-4 border-black h-full flex items-center justify-center cursor-pointer hover:bg-white ";
const INACTIVE_NAVBAR_LINK_STYLING =
	"lg:w-1/5 md:w-1/4 border-b-4 border-transparent h-full flex items-center justify-center cursor-pointer hover:bg-white";

const handleSettingsPopUpClick = (setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>) => {
	setShowSettingsPopUp((prev) => (prev = !prev));
};

const handleFullScreenNavBarClick = (
	setShowFullScreenNavBar: React.Dispatch<React.SetStateAction<boolean>>,
	hamburgerMenuRef: React.RefObject<HTMLDivElement>
) => {
	setShowFullScreenNavBar((prev) => {
		if (prev) {
			prev = false;
			hamburgerMenuRef.current?.classList.remove("bg-gray-200");
		} else {
			prev = true;
			hamburgerMenuRef.current?.classList.add("bg-gray-200");
		}
		return prev;
	});
};

const handleFloatingSearchBarIconClick = (
	setShowFloatingSearchBar: React.Dispatch<React.SetStateAction<boolean>>,
	searchIconRef: React.RefObject<HTMLDivElement>
) => {
	setShowFloatingSearchBar((prev) => {
		if (prev) {
			prev = false;
			searchIconRef.current?.classList.remove("bg-gray-200");
		} else {
			prev = true;
			searchIconRef.current?.classList.add("bg-gray-200");
		}
		return prev;
	});
};

const Navhar: React.FC<NavBarProps> = ({ activePage }) => {
	const [showSettingsPopUp, setShowSettingsPopUp] = useState<boolean>(false);
	const [showFullScreenNavBar, setShowFullScreenNavBar] = useState<boolean>(false);
	const [showFloatingSearchBar, setShowFloatingSearchBar] = useState<boolean>(false);
	const hamburgerMenuRef = useRef<HTMLDivElement>(null);
	const searchIconRef = useRef<HTMLDivElement>(null);

	return (
		<nav className="flex w-full h-12 px-5 items-center border-b justify-between fixed z-20" style={{ backgroundColor: "white" }}>
			<div className="flex items-center">
				<Link href="/">
					<h2 className="text-2xl font-semibold cursor-pointer">Cheers.</h2>
				</Link>
				<div
					ref={searchIconRef}
					className="lg:hidden md:hidden sm:flex items-center justify-center ml-4 h-8 w-8 rounded-full cursor-pointer"
					onClick={() => handleFloatingSearchBarIconClick(setShowFloatingSearchBar, searchIconRef)}
				>
					<MdSearch size={22} />
				</div>
				{showFloatingSearchBar && <FloatingSearchBar />}
			</div>

			<div className="lg:w-1/4 md:w-1/3 lg:block md:block sm:hidden h-full items-center justify-center p-2">
				<div className="w-full h-full flex relative">
					<input
						className="bg-transparent h-full focus:outline-none text-sm border bg-white pl-2 rounded-l-md pr-2"
						style={{ width: "91%" }}
						placeholder="Search"
					/>
					<div className="bg-black w-8 h-full flex-auto cursor-pointer rounded-r-md border border-black hover:bg-gray-700 flex items-center justify-center absolute top-0 right-0 bottom-0 active:bg-gray-500">
						<MdSearch color="#f8f8f8" size={18} />
					</div>
				</div>
			</div>

			<ul className="lg:flex md:flex sm:hidden justify-end w-1/4 h-full">
				<Link href="/">
					{activePage === "home" ? (
						<li className={ACTIVE_NAVBAR_LINK_STYLING}>
							<MdOutlineHome size={24} />
						</li>
					) : (
						<li className={INACTIVE_NAVBAR_LINK_STYLING}>
							<MdOutlineHome size={24} />
						</li>
					)}
				</Link>

				<Link href="/profile/reservations">
					{activePage === "reservations" ? (
						<li className={ACTIVE_NAVBAR_LINK_STYLING}>
							<MdCalendarToday size={19} />
						</li>
					) : (
						<li className={INACTIVE_NAVBAR_LINK_STYLING}>
							<MdCalendarToday size={19} />
						</li>
					)}
				</Link>
			</ul>

			<div className="items-center lg:flex md:flex sm:hidden">
				<Link href="/profile/settings">
					<div className="flex items-center cursor-pointer hover:bg-gray-200 p-1 rounded-md transition-all active:bg-gray-400">
						<div className="rounded-full h-8 w-8 bg-black mr-2">
							<span>
								<i></i>
							</span>
						</div>
						<p className="text-sm">Username</p>
					</div>
				</Link>
				<div className="flex items-center relative">
					<div
						className="ml-3 w-6 h-6 cursor-pointer rounded-full hover:bg-gray-200 transition-all"
						onClick={() => handleSettingsPopUpClick(setShowSettingsPopUp)}
					>
						<MdArrowDropDown size={24} />
					</div>
					{showSettingsPopUp && <SettingsPopUp setShowSettingsPopUp={setShowSettingsPopUp} />}
				</div>
			</div>

			<div className="lg:hidden md:hidden sm:flex items-center">
				<div
					ref={hamburgerMenuRef}
					className="mr-3 cursor-pointer p-2 rounded-md transition-all"
					onClick={() => handleFullScreenNavBarClick(setShowFullScreenNavBar, hamburgerMenuRef)}
				>
					<GiHamburgerMenu size={24} />
				</div>
				{showFullScreenNavBar && <NavBarFullScreen />}
				<div
					className="rounded-full h-8 w-8 bg-black cursor-pointer relative"
					onClick={() => {
						handleSettingsPopUpClick(setShowSettingsPopUp);
					}}
				>
					<span>
						<i></i>
					</span>
				</div>
				{showSettingsPopUp && <SettingsPopUp setShowSettingsPopUp={setShowSettingsPopUp} />}
			</div>
		</nav>
	);
};

export default Navhar;
