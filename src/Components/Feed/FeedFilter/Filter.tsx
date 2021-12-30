
/*

Cheers - Main Filter Component in index page (for large screen)
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/


import React, { useEffect, useRef, useState } from "react";


import FilterComponent from "./BaseFilterComponent";
import FilterModal from "./FilterModal";


const Filter: React.FC = () => {

	const filterContainerRef = useRef<HTMLDivElement | null>(null);
	const [showFilterModal, setShowFilterModal] = useState<boolean>(false);


	const filterContainerPositioningStyles = () => {
		if (filterContainerRef.current) {
			const filterContainerBoundingRect = filterContainerRef.current.getBoundingClientRect();

			if (filterContainerBoundingRect.top === 48) {
				filterContainerRef.current.style.backgroundColor = "white";
				filterContainerRef.current.classList.add("shadow-md");
				return;
			}
			filterContainerRef.current.style.backgroundColor = "transparent";
			filterContainerRef.current.classList.remove("shadow-md");
		}
	};


	useEffect(() => {
		filterContainerPositioningStyles();
	}, []);


	useEffect(() => {
		window.addEventListener("scroll", filterContainerPositioningStyles);

		return () => {
			window.removeEventListener("scroll", filterContainerPositioningStyles);
			filterContainerRef.current = null;
		};
	}, []);


	return (
		<>
			<div
				ref={filterContainerRef}
				className="w-screen sticky items-center justify-center lg:flex md:hidden sm:hidden z-20"
				style={{ top: "3rem" }}
			>
				
				<div className="flex lg:items-end mt-1 pb-5 pt-2 lg:container md:container sm:mx-5 lg:flex-row lg:justify-between md:flex-col md:w-full md:items-center md:justify-center sm:flex-col sm:w-full sm:items-center sm:justify-center">
					
					<FilterComponent showCancel={false} />

				</div>

			</div>

			<div className="w-full flex items-center justify-center lg:hidden md:block">
				<button
					className="border border-black w-full py-2 px-5 rounded-md hover:bg-black hover:text-white transition-all"
					onClick={() => {
						setShowFilterModal(true);
					}}
				>
					Filters
				</button>
			</div>

			{showFilterModal && <FilterModal setShowFilterModal={setShowFilterModal} />}

		</>
	);
};

export default Filter;
