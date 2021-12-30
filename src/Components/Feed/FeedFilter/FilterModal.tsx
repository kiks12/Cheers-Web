
/*

Cheers - Filter Modal Component 
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import React from "react";


import useCursorOutside from "../../../Custom-Hooks/useCursorOutside";


import FilterComponent from "./FilterComponent";


interface FilterModalProps {
	setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const FilterModal: React.FC<FilterModalProps> = ({ setShowFilterModal }) => {

	const handleFilterModalClose = () => {
		setShowFilterModal((prev) => (prev = !prev));
	};

	const filterModalRef = useCursorOutside(() => handleFilterModalClose());

	return (
		<div className="fixed w-screen h-screen bg-black top-0 z-20 bg-opacity-60 px-10 py-10 items-center justify-center transition-all flex z-50">
			
			<div className="md:w-1/2 sm:w-full h-full bg-white rounded-md border flex flex-col items-center justify-between p-5" ref={filterModalRef}>

				<h1 className="text-xl font-semibold h-24">Filters</h1>

				<FilterComponent setShowFilterModal={setShowFilterModal} showCancel={true} />

			</div>
			
		</div>
	);
};

export default FilterModal;
