import { useRouter } from "next/dist/client/router";
import Head from "next/dist/shared/lib/head";
import Navhar from "../../../src/Components/Generals/navbar";
import PageBar from "../../../src/Components/PageBar";
import { MdOutlineLocationOn } from "react-icons/md";

const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const dummyLocation = "1.2km";
const dummyAddress = "Angeles City, Pampanga";
const dummyContacts = "(0948) 279 1258";
const dummyPrice = "200 php - 1,000 php"

const Overview = () => {

    const router = useRouter();
    const {bar} = router.query;

    return(
        <>
            <Head>
                <title>{bar}</title>
            </Head>
            <Navhar />
            <main className="container mx-auto h-full py-16 flex flex-col items-center">
                <PageBar barName={bar} isFeatured={true} active="overview"/>

                <div className="w-full h-96 mt-5 flex">
                    <div className="h-full w-2/3 flex items-center justify-center bg-gray-400 rounded-2xl">
                        Image
                    </div>
                    <div className="bg-gray-200 ml-2 w-1/3 flex items-center justify-center rounded-2xl">
                        Map
                    </div>
                </div>

                <p className="text-sm mt-8 font-normal">{dummyText}</p>

                <div className="w-full mt-10 flex">
                    <div className="w-1/6">
                        <div className="flex w-full justify-between mb-2">
                            <h3 className="text-lg font-semibold">Address</h3>
                            <div className="flex text-gray-500 text-sm items-center">
                                <MdOutlineLocationOn size={18}/>
                                <p>{dummyLocation}</p>
                            </div>
                        </div>

                        <p className="font-normal text-sm">
                            {dummyAddress}
                        </p>
                    </div>

                    <div className="w-1/6 ml-16">
                        <div className="flex w-full justify-between mb-2">
                            <h3 className="text-lg font-semibold">Contacts</h3>
                        </div>

                        <p className="font-normal text-sm">
                            {dummyContacts}
                        </p>
                    </div>

                    <div className="w-1/6 ml-16">
                        <div className="flex w-full justify-between mb-2">
                            <h3 className="text-lg font-semibold">Price Range</h3>
                        </div>

                        <p className="font-normal text-sm">
                            {dummyPrice}
                        </p>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Overview;