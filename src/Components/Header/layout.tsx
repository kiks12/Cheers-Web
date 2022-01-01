
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
