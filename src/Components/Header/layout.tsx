
/*

Cheers - Header Layout
Last Updated: Jan. 4, 2022
Tolentino, Francis James S.

*/


import React from "react";
import Link from "next/link";


// import Navhar from "./Navbar/navbar";


// import { useActivePage } from "../../Custom-Hooks/useActivePage";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";


const Layout: React.FC = ({ children }) => {

	const router = useRouter();

	// const [activePage] = useActivePage();

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
					 style={{ backgroundColor: "white" }} >
					<Link href="/" passHref={true}>
						<h2 className="text-2xl font-semibold cursor-pointer">
							Cheers.
						</h2>
					</Link>
				</nav>
					
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
					className="w-screen items-center justify-center lg:flex md:hidden sm:hidden z-20 mt-10"
					>
					
						<div className="flex lg:items-end mt-1 pb-5 pt-2 lg:container md:container sm:mx-5 lg:flex-row lg:justify-between md:flex-col md:w-full md:items-center md:justify-center sm:flex-col sm:w-full sm:items-center sm:justify-center">
							
							<div className="flex flex-1 lg:flex-row md:flex-col md:w-full sm:flex-col sm:w-full justify-between">

										<div className="flex lg:flex-row lg:items-end lg:justify-between lg:w-3/4 md:flex-col md:w-full sm:flex-col sm:w-full">
											<div className="flex-1 lg:mr-5 md:mr-0 sm:mr-0 flex flex-col justify-between h-full">
												<p className="font-semibold mb-2">Type</p>
												<select className="w-full h-8 bg-white border rounded-md px-2 text-sm">
													<option>Both</option>
													<option>Bars</option>
													<option>Clubs</option>
												</select>
											</div>

											<div className="flex-1 lg:mr-5 md:mr-0 lg:mt-0 md:mt-5 sm:mt-5 flex flex-col justify-between h-full">
												<p className="font-semibold mb-2">Reviews</p>
												<select className="w-full h-8 bg-white border rounded-md px-2 text-sm">
													<option>All</option>
													<option>5 Stars</option>
													<option>4 Stars</option>
													<option>3 Stars</option>
													<option>2 Stars</option>
													<option>1 Star</option>
												</select>
											</div>

											<div className="flex-1 lg:mr-5 md:mr-0 lg:mt-0 md:mt-5 sm:mt-5 flex flex-col justify-between h-full">
												<p className="font-semibold mb-2">Location</p>
												<select className="w-full h-8 bg-white border rounded-md px-2 text-sm">
													<option>Near Me</option>
													<option>Bars</option>
													<option>Clubs</option>
												</select>
											</div>

											<div className="flex-1 lg:mt-0 md:mt-5 sm:mt-5">
												<p className="font-semibold mb-2">Price Range</p>
												<p className="text-sm">P100.00</p>
												<input type="range" className="w-full slider" min="50" max="1000" />
											</div>
										</div>

										<div className="lg:w-1/4 lg:pl-5">
											<div className="flex lg:w-full md:w-full sm:w-full items-end justify-end md:mt-10 sm:mt-10">
												<button className="w-full bg-black text-white font-light h-8 rounded-md hover:bg-gray-700 transition-all text-sm">Apply</button>
											</div>

											<div className="flex items-center justify-center lg:hidden">
												<button
													className="w-full border border-red-400 text-red-400 font-light h-8 rounded-md hover:bg-red-400 hover:text-white mt-2 transition-all text-sm"
												>
													Cancel
												</button>
											</div>
										</div>

									</div>

						</div>

					</div>

					<div className="w-full flex items-center justify-center lg:hidden md:block mt-10">
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
			{/* <Navhar activePage={activePage} /> */}
			{children}
		</div>
	);
};


export default Layout;
