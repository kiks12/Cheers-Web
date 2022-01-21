
/*

Cheers - Community Page
Date Created: Jan. 21, 2022
Last Updated: Jan. 21, 2022
Tolentino, Francis James S.

*/


import type { NextPage } from "next";
import Head from "next/head";


import { useSession } from "next-auth/react";


const Community : NextPage = () => {

    const {status: status} = useSession();
    

    return(
        <>
            <Head>
                <title>Home</title>
            </Head>

            {status !== "loading" && (
                <>
                <main className='lg:container md:mx-5 sm:mx-5 lg:mx-auto h-full py-16 flex flex-col items-center'>

                </main>
                </>
            )}
        </>
    )
}


export default Community;