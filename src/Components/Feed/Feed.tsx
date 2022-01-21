
/*

Cheers - Feed Component
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


import React, { useState } from "react";


import BarFeed from "./BarFeed";


const Feed: React.FC = () => {

  const [bars] = useState(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);


  return (
      <>
      {
        bars ? 
        bars.map((bar) => {
          return <BarFeed key={bar} />;
        }) : (
          <p>No Bars to show</p>
          )
        }
      </>
  );
};

export default Feed;
