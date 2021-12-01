import Head from "next/head";
import Navhar from "../../../src/Components/Generals/navbar";

const Reservations = () => {
    return(
        <>
        <Head>
            <title>Reservations</title>
        </Head>
        <Navhar activePage="reservations"/>
        </>
    )
}


export default Reservations;