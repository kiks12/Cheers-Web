import React from "react";
import FilterComponent from "./FilterComponent";

interface FilterModalProps {
    setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterModal : React.FC<FilterModalProps> = ({setShowFilterModal}) => {
    return(
        <div className="fixed w-screen h-screen bg-black top-0 z-20 bg-opacity-60 flex px-10 py-10 items-center justify-center transition-all">
            <div className="md:w-1/2 sm:w-full h-full bg-white rounded-md border flex flex-col items-center justify-between p-5">
                <h1 className="text-xl font-semibold h-1/4">Filters</h1>
                <FilterComponent setShowFilterModal={setShowFilterModal} showCancel={true}/> 
            </div>
        </div>
    )
}


export default FilterModal;