
/*

Cheers - Bar SPA 
Date Created: Jan. 22, 2022
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import type { NextPage } from "next";


import Head from "next/head";
import { useState } from "react";


import BarPageSkeleton from "../../src/Components/SingleBarPage/BarPageSkeleton";
import PageBar from "../../src/Components/SingleBarPage/PageHeader";
import Feed from "../../src/Components/Feed/Feed";


const BarPage : NextPage = () => {

    const [activePrompt, setActivePrompt] = useState<string>("overview");


    return(
        <>
            <Head>
                <title></title>
            </Head>

            <BarPageSkeleton>
                <div className="col-span-2">
                    <PageBar barName={""} isFeatured={true} active={activePrompt} setActive={setActivePrompt}/>
                </div> 

                <div>
                    <Feed />
                </div>
            </BarPageSkeleton>
        </>
    )
}


export default BarPage;