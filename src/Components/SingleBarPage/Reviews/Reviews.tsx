
/*

Cheers - Reviews SPA Component
Date Created: Jan. 22, 2022
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import React from "react";
import Review from "./Review";


const dummyReviews = [
  "sdf",
  "asdf",
  "sdfsdd",
  "sasfsd",
  "sdfs",
  "asfasd",
  "sdfasdf",
];


const Reviews : React.FC = () => {

    return(
        <>
            <div className='w-full mt-5 h-16 border rounded-md flex items-center p-3'>
                <input
                    className='h-full bg-white border p-2 lg:w-1/4 md:w-1/3 sm:w-full rounded-full text-sm'
                    placeholder='Add a review'
                />
            </div>

              {dummyReviews && dummyReviews.map((review) => <Review key={review} />)}
        </>
    )
}


export default Reviews;