
/*

Cheers - Navigation Bar Constant variables
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


type ActiveNavbarLink = "lg:w-1/5 md:w-1/4 border-b-4 border-black h-full flex items-center justify-center cursor-pointer hover:bg-white";

type InactiveNavbarLink = "lg:w-1/5 md:w-1/4 border-b-4 border-transparent h-full flex items-center justify-center cursor-pointer hover:bg-white";


type LargeScreenActiveSettings = 0;
type SmallScreenActiveSettings = 1;


export const ACTIVE_NAVBAR_LINK_STYLING : ActiveNavbarLink=
	"lg:w-1/5 md:w-1/4 border-b-4 border-black h-full flex items-center justify-center cursor-pointer hover:bg-white";

export const INACTIVE_NAVBAR_LINK_STYLING : InactiveNavbarLink =
	"lg:w-1/5 md:w-1/4 border-b-4 border-transparent h-full flex items-center justify-center cursor-pointer hover:bg-white";


export const LARGE_SCREEN_ACTIVE_SETTINGS : LargeScreenActiveSettings = 0;
export const SMALL_SCREEN_ACTIVE_SETTINGS : SmallScreenActiveSettings = 1;
