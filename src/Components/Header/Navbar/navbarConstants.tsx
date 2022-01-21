
/*

Cheers - Navigation Bar Constant variables
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


type ActiveNavbarLink = string;

type InactiveNavbarLink = string;


type LargeScreenActiveSettings = 0;
type SmallScreenActiveSettings = 1;


type SignoutCallbackUrl = "http://localhost:3000/login";


export const ACTIVE_NAVBAR_LINK_STYLING : ActiveNavbarLink=
	"lg:w-1/5 md:w-1/3 border-b-4 border-black h-full flex items-center justify-center cursor-pointer hover:bg-white";

export const INACTIVE_NAVBAR_LINK_STYLING : InactiveNavbarLink =
	"lg:w-1/5 md:w-1/3 border-b-4 border-transparent h-full flex items-center justify-center cursor-pointer hover:bg-white";


export const LARGE_SCREEN_ACTIVE_SETTINGS : LargeScreenActiveSettings = 0;
export const SMALL_SCREEN_ACTIVE_SETTINGS : SmallScreenActiveSettings = 1;


export const SIGNOUT_CALLBACK_URL : SignoutCallbackUrl = "http://localhost:3000/login";