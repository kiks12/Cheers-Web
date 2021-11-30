import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import useInnerWidth from "../../../Custom-Hooks/useInnerWidth";
import FilterComponent from "./FilterComponent";
import FilterModal from "./FilterModal";


const getFilterContainerPosition = (elementRef: MutableRefObject<HTMLDivElement | null>) => {
    if(elementRef.current){
        const filterContainerBoundingRect = elementRef.current.getBoundingClientRect();

        if(filterContainerBoundingRect.top === 48){
            elementRef.current.style.backgroundColor = "white";
            elementRef.current.classList.add("shadow-md");
            return;
        }
        elementRef.current.style.backgroundColor = "transparent";
        elementRef.current.classList.remove("shadow-md");
    }
}


const Filter : React.FC = () => {
    const filterContainer = useRef<HTMLDivElement | null>(null);
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    const [innerWidth] = useInnerWidth();

    useEffect(() => {
        window.addEventListener("scroll", () => getFilterContainerPosition(filterContainer));

        return () => {
            window.removeEventListener("scroll", () => getFilterContainerPosition(filterContainer));
            filterContainer.current = null;
        }
    },[]);

    return(
        <>
            { 
                innerWidth >= 1280 && 
                <div ref={filterContainer} className="w-screen sticky flex items-center justify-center" style={{top: "3rem"}}>
                    <div className="flex lg:items-end mt-1 pb-5 pt-2 lg:container md:container sm:mx-5 lg:flex-row lg:justify-between md:flex-col md:w-full md:items-center md:justify-center sm:flex-col sm:w-full sm:items-center sm:justify-center">
                        <FilterComponent showCancel={false}/> 
                    </div>
                </div>
            }

            {
                (innerWidth < 1280) &&
                <div className="w-full flex items-center justify-center">
                    <button className="border border-black w-full py-2 px-5 rounded-md hover:bg-black hover:text-white transition-all"
                        onClick={() => {
                            setShowFilterModal((prev: boolean) => prev = true);
                        }}>
                        Filters
                    </button>
                </div>
            }

            {
                (showFilterModal && innerWidth < 1280) && <FilterModal setShowFilterModal={setShowFilterModal}/>
            }
        </>
    )
}

export default Filter;