
/*

Cheers - Single Reservation page
Date Created: Jan. 20, 2022
Last Updated: Jan. 20, 2022
Tolentino, Francis James S.

*/


import React from 'react';


import type { NextPage } from 'next';
import { useRouter } from 'next/router';


const Reservation : NextPage = () => {

    const { reservation } = useRouter().query;


    return(
        <main className="lg:container lg:mx-auto md:mx-5 sm:mx-5 py-16">
            <p>{ reservation }</p>
        </main>
    )
}


export default Reservation;