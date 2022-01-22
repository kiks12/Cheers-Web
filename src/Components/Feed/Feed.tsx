
/*

Cheers - Feed Component
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import React from "react";


import BarFeed from "./BarFeed";


const dummyData = [
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "1ajdkf",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
    type: "bar",
    location: "1 km",
    priceRange: "200 php - 500 php",
  },
  {
    barName: "abc",
    isFeatured: false,
    image: "",
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
          const {type,  barName, location, priceRange, image } = bar;
          return <BarFeed key={idx} barName={barName} type={type} location={location} priceRange={priceRange} image={image} />;
        }) : (
          <p>No Bars to show</p>
          )
        }
      </>
  );
};

export default Feed;
