import { useRouter } from "next/dist/client/router";
import Head from "next/dist/shared/lib/head";
import Navhar from "../../../src/Components/navbar";
import PageBar from "../../../src/Components/PageBar";


const images = ['Image 1', 'Image 2', 'Image 3', 'Image 4', 'image 5', 'ad', 'sdf', 'sdafsd', 'sdfas'];

const Photos = () => {
    const router = useRouter();
    const {bar} = router.query;

    return(
        <>
            <Head>
                <title>{bar}</title>
            </Head>
            <Navhar />
            <main className="container h-full mx-auto py-16 flex flex-col items-center">
                <PageBar barName={bar} isFeatured={true} active="photos"/>
                
                <div className="mt-5 flex w-full flex-wrap">
                    {
                        images ?
                        images.map(image => {
                            return(
                                <div className="w-1/4-m-1 m-1 bg-gray-300 h-44 cursor-pointer hover:border-black hover:border hover:shadow-md flex items-center justify-center rounded-lg">
                                    {image}
                                </div>
                            )
                        })
                        :
                        <p>No Photos to show</p>
                    }
                </div>
                                
            </main>
        </>
    )
}

export default Photos;