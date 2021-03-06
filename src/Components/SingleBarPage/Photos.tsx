
/*

Cheers - Photos SPA Component
Date Created: Jan. 22, 2022
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import React from "react";


const dummyImages = [
  "Image 1",
  "Image 2",
  "Image 3",
  "Image 4",
  "image 5",
  "ad",
  "sdf",
  "sdafsd",
  "sdfas",
];


const Photos : React.FC = () => {
    return(
        <>
            <div className='mt-5 flex w-full flex-wrap'>
                {dummyImages ? (
                    dummyImages.map((image) => {
                        return (
                            <div
                                key={image}
                                className='lg:w-1/4-m-1 md:w-1/3-m-1 sm:w-1/2-m-1 mr-1 mt-1 bg-gray-300 lg:h-56 md:h-64 sm:h-36 cursor-pointer hover:shadow-md flex items-center justify-center rounded-lg border border-transparent hover:border-white'>
                                {image}
                            </div>
                        );
                    })
                ) : (
                    <p>No Photos to show</p>
                )}
            </div>
        </>
    )
}


export default Photos;