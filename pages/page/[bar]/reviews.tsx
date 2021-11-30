import { useRouter } from "next/dist/client/router";
import Head from "next/dist/shared/lib/head";
import Navhar from "../../../src/Components/Generals/navbar";
import PageBar from "../../../src/Components/PageBar";
import Review from "../../../src/Components/Review";

const reviews = ['sdf','asdf','sdfsdd','sasfsd','sdfs','asfasd','sdfasdf'];

const Bar = () => {
    const router = useRouter();
    const {bar} = router.query;

    return(
        <>
            <Head>
                <title>{bar}</title>
            </Head>
            <Navhar />
            <main className="container mx-auto h-full py-16 flex flex-col items-center">
                <PageBar barName={bar} isFeatured={true} active="reviews"/>

                <div className="w-full mt-5 h-16 border rounded-md flex items-center p-3">
                    <input className="h-full bg-white border p-2 w-1/4 rounded-full" placeholder="Add a review"/>
                </div>

                {
                    reviews && reviews.map(review => <Review key={review}/>)
                }
                                
            </main>
        </>
    )
}

export default Bar;