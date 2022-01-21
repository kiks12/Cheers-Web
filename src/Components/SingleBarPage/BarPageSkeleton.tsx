
/*

Cheers - Bar page skeleton component
Date Created: Jan. 21, 2022
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


import React from "react";


interface BarPageSkeletonProps {

}

const BarPageSkeleton : React.FC<BarPageSkeletonProps> = ({ children }) => {
    return(
        <main className="md:mx-5 sm:mx-5 lg:container lg:mx-auto h-full py-16 grid grid-cols-4 gap-6">
            {children}
        </main>
    )
}


export default BarPageSkeleton;