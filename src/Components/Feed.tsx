import { useState } from "react";
import BarFeed from "./BarFeed";
import Filter from "./Filter";
import SortBy from "./SortBy";

const Feed = () => {
    const [bars, setBars] = useState(() => [0,1,2,3,4,5,6,7,8,9]);

    return(
        <div className="mt-10">
            <Filter />
            <SortBy />
            {
                bars && bars.map(() => {
                    return <BarFeed />
                })
            }
        </div>
    )
}

export default Feed;