
/*

Cheers - Sort By Independent Component
Date Created: Jan. 20, 2022
Last Updated: Jan. 20, 2022
Tolentino, Francis James S.

*/


import React, { useState } from "react";


interface SortByProps {
    values: string[];
    handler: (e: any, setter: React.Dispatch<React.SetStateAction<any>>) => void;
}


const SortBy: React.FC<SortByProps> = ({handler, values}) => {

    const [currentSorting, setCurrentSorting] = useState(() => values[0]);

    return(
        <div className="w-100 py-2 flex flex-col">
            <label>Sort by:</label>
            <select onChange={(e) => handler(e, setCurrentSorting)} value={currentSorting} 
                className="bg-white border py-1 px-2 w-100 text-sm mt-2"
            >
                {
                    values && values.map((sortingValue, idx) => {
                        return <option value={sortingValue} key={idx}>{sortingValue}</option>
                    })
                }
            </select>
        </div>
    )
}


export default SortBy;