
/*

Cheers - Header Layout
Last Updated: Jan. 2, 2022
Tolentino, Francis James S.

*/


import React from "react";


import Navhar from "./Navbar/navbar";


import { useActivePage } from "../../Custom-Hooks/useActivePage";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FilterComponent from "../Feed/FeedFilter/BaseFilterComponent";


const Layout: React.FC = ({ children }) => {

	const router = useRouter();

	const [activePage] = useActivePage();

	const { status } = useSession();

	if (router.pathname === "/login"){
		return (
			<div>
				{ children }
			</div>
		)
	}


	if (status === "loading"){
		return (
			<>
				<nav className="flex w-full h-12 px-5 items-center border-b justify-between fixed z-20" 
					 style={{ backgroundColor: "white" }} />
					
       		    <main className='lg:container md:mx-5 sm:mx-5 lg:mx-auto h-full py-16 flex flex-col items-center'>
					<div className='w-full flex flex-col items-center'>
						<div className='w-full'>
							<p className='font-light'>Featured by Cheers</p>
						</div>


						<div
							className='cursor-pointer h-72 w-full rounded-2xl p-4 flex justify-between mt-1 relative featured'>	
						</div>
					</div>

					<div
					className="w-screen sticky items-center justify-center lg:flex md:hidden sm:hidden z-20"
					>
					
						<div className="flex lg:items-end mt-1 pb-5 pt-2 lg:container md:container sm:mx-5 lg:flex-row lg:justify-between md:flex-col md:w-full md:items-center md:justify-center sm:flex-col sm:w-full sm:items-center sm:justify-center">
							
							<FilterComponent showCancel={false} />

						</div>

					</div>

					<div className="w-full flex items-center justify-center lg:hidden md:block">
						<button
							className="border border-black w-full py-2 px-5 rounded-md hover:bg-black hover:text-white transition-all"
						>
							Filters
						</button>
					</div>
				</main>
			</>
		)
	}


	return (
		<div>
			<Navhar activePage={activePage} />
			{children}
		</div>
	);
};


export default Layout;
