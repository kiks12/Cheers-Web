
/*

Cheers - Bar SPA 
Date Created: Jan. 22, 2022
Last Updated: Jan. 22, 2022
Tolentino, Francis James S.

*/


import type { NextPage } from "next";


import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";


import BarPageSkeleton from "../../src/Components/SingleBarPage/BarPageSkeleton";
import PageBar from "../../src/Components/SingleBarPage/PageHeader";
import Feed from "../../src/Components/Feed/Feed";
import Overview from "../../src/Components/SingleBarPage/Overview";


const BarPage : NextPage = () => {

    const [activePrompt, setActivePrompt] = useState<string>("overview");

    const { bar } = useRouter().query;

    return(
        <>
            <Head>
                <title></title>
            </Head>

            <BarPageSkeleton>
                <div className="col-span-2">
                    <PageBar barName={bar} isFeatured={true} active={activePrompt} setActive={setActivePrompt}/>

                    {
                        activePrompt === "overview" && <Overview />
                    }
                    
                </div> 

                <div>
                    <Feed />
                </div>
            </BarPageSkeleton>
        </>
    )
}


export default BarPage;