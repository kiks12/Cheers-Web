import { useRouter } from "next/dist/client/router";
import Head from "next/dist/shared/lib/head";
import Navhar from "../../../src/Components/navbar";
import PageBar from "../../../src/Components/PageBar";

const Reviews = () => {
    const router = useRouter();
    const {bar} = router.query;

    return(
        <>
            <Head>
                <title>{bar}</title>
            </Head>
            <Navhar />
            <main className="container mx-auto h-screen py-16 flex flex-col items-center">
                <PageBar barName={bar} isFeatured={true} active="overview"/>



                                
            </main>
        </>
    )
}

export default Reviews;