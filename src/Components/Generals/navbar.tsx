import React, { useState } from "react";
import {
  MdOutlineHome,
  MdCalendarToday,
  MdSearch,
  MdArrowDropDown,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SettingsPopUp from "./SettingsPopUp";

interface NavBarProps {
  activePage?: string;
}

const ACTIVE_NAVBAR_LINK_STYLING =
  "w-1/6 border-b-4 border-black h-full flex items-center justify-center cursor-pointer hover:bg-white";
const INACTIVE_NAVBAR_LINK_STYLING =
  "w-1/6 border-b-4 border-transparent h-full flex items-center justify-center cursor-pointer hover:bg-white";

const handleSettingsPopUpClick = (
  setShowSettingsPopUp: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowSettingsPopUp((prev) => (prev = !prev));
};

const Navhar: React.FC<NavBarProps> = ({ activePage }) => {
  const [showSettingsPopUp, setShowSettingsPopUp] = useState<boolean>(false);

  return (
    <nav
      className="flex w-full h-12 px-5 items-center border-b justify-between fixed z-20"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="text-2xl font-semibold">Cheers.</h2>

      <div className="w-1/4 lg:block md:block sm:hidden h-full items-center justify-center p-2">
        <div className="w-full h-full bg-white border rounded-full pl-3 flex pt-1 pr-1 pb-1">
          <input
            className="w-full bg-transparent h-full focus:outline-none text-sm"
            placeholder="Search"
          />
          <div className="bg-white w-8 h-full rounded-full cursor-pointer hover:bg-gray-200 flex items-center justify-center">
            <MdSearch size={20} />
          </div>
        </div>
      </div>

      <ul className="lg:flex md:flex sm:hidden justify-start w-1/4 h-full">
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
        <div className="rounded-full h-8 w-8 bg-black mr-2">
          <span>
            <i></i>
          </span>
        </div>
        <p className="text-sm">Username</p>
        <div className="flex items-center relative">
          <div
            className="ml-3 w-6 h-6 cursor-pointer rounded-full hover:bg-gray-200 transition-all"
            onClick={() => handleSettingsPopUpClick(setShowSettingsPopUp)}
          >
            <MdArrowDropDown size={24} />
          </div>
          {showSettingsPopUp && <SettingsPopUp />}
        </div>
      </div>

      <div className="lg:hidden md:hidden sm:block">
        <GiHamburgerMenu size={24} />
      </div>
    </nav>
  );
};

export default Navhar;
