import React, { useState } from "react";
import BarFeed from "./BarFeed";
import Filter from "./FeedFilter/Filter";
import SortBy from "./SortBy";

const Feed : React.FC = () => {
    const [bars] = useState(() => [0,1,2,3,4,5,6,7,8,9]);

    return(
        <div className="mt-10 w-full flex flex-col items-center">
            <Filter />
            <SortBy />
            {
                bars && bars.map(bar => {
                    return <BarFeed key={bar}/>
                })
            }
        </div>
    )
}

export default Feed;