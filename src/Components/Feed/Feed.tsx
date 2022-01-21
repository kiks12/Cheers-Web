
/*

Cheers - Feed Component
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


import React, { useState } from "react";


import BarFeed from "./BarFeed";
import Filter from "./FeedFilter/Filter";
import SortBy from "../SortByComponent/SortBy";


const SORTING_VALUES = ["Location", "Reviews"];


const Feed: React.FC = () => {

  const [bars] = useState(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);


  const sortingHandler = (e:any, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  }


  return (
    <div className='mt-10 w-full flex flex-col items-center'>
      
      <Filter />

      <div className="w-full">
          <div className="lg:w-1/4 md:w-1/3 sm:w-full">
              <SortBy values={SORTING_VALUES} handler={sortingHandler}/>
          </div>
      </div>
      
      {
        bars ? 
          bars.map((bar) => {
            return <BarFeed key={bar} />;
          }) : (
            <p>No Bars to show</p>
          )
      }

    </div>
  );
};

export default Feed;
