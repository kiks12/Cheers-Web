
/*

Cheers - Feed Component
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import React from "react";


import BarFeed from "./BarFeed";


const dummyData = [
  {
    barID: 101010,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101011,
    barName: "1ajdkf",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101012,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101013,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101014,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101015,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101016,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101017,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101018,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barID: 101019,
    barName: "abc",
    isFeatured: false,
    image: "/bar-goto-nyc-bar-interior-Alex-lau.jpeg",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
]


const Feed: React.FC = () => {


  return (
      <>
      {
        dummyData ? 
        dummyData.map((bar, idx) => {
          const {type,  barName, location, priceRange, image, barID} = bar;
          return  <BarFeed key={idx} 
                          barName={barName} 
                          type={type} 
                          location={location} 
                          priceRange={priceRange} 
                          image={image}
                          barID={barID}
                  />;
        }) : (
          <p>No Bars to show</p>
          )
        }
      </>
  );
};

export default Feed;
