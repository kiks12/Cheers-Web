
/*

Cheers - Overview SPA Component
Date Created: Jan. 22, 2022
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import { MdOutlineLocationOn } from "react-icons/md";


import React from "react";


const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const dummyLocation = "1.2km";
const dummyAddress = "Angeles City, Pampanga";
const dummyContacts = "(0948) 279 1258";
const dummyPrice = "200 php - 1,000 php";


const Overview : React.FC = () => {
    return(
        <>
            <div className='w-full h-auto mt-5 flex lg:flex-row md:flex-row sm:flex-col'>
                <div className='lg:h-96 md:h-96 sm:h-72 lg:w-2/3 md:w-1/2 flex items-center justify-center bg-gray-400 rounded-2xl'>
                    Image
                </div>
                <div className='bg-gray-200 lg:h-96 md:h-96 sm:h-72 lg:ml-2 md:ml-2 sm:ml-0 lg:mt-0 md:mt-0 sm:mt-2 lg:w-1/3 md:w-1/2 flex items-center justify-center rounded-2xl'>
                    Map
                </div>
            </div>

            <p className='text-sm mt-8 font-normal leading-relaxed'>{dummyText}</p>

            <div className='w-full mt-10 flex lg:flex-row md:flex-row sm:flex-col justify-between'>
                <div className='lg:w-1/6 md:w-1/6 sm:w-full'>
                    <div className='flex w-full justify-between mb-2'>
                        <h3 className='text-lg font-semibold'>Address</h3>
                        <div className='flex text-gray-500 text-sm items-center'>
                            <MdOutlineLocationOn size={18} />
                            <p>{dummyLocation}</p>
                        </div>
                    </div>

                    <p className='font-normal text-sm'>{dummyAddress}</p>
                </div>

                <div className='lg:w-1/6 md:w-1/6 sm:w-full lg:mt-0 md:mt-0 sm:mt-5'>
                    <div className='flex w-full justify-between mb-2'>
                        <h3 className='text-lg font-semibold'>Contacts</h3>
                    </div>

                    <p className='font-normal text-sm'>{dummyContacts}</p>
                </div>

                <div className='lg:w-1/6 md:w-1/6 sm:w-full lg:mt-0 md:mt-0 sm:mt-5'>
                    <div className='flex w-full justify-between mb-2'>
                        <h3 className='text-lg font-semibold'>Price Range</h3>
                    </div>

                    <p className='font-normal text-sm'>{dummyPrice}</p>
                </div>

            </div>
        </>
    )
}


export default Overview;
