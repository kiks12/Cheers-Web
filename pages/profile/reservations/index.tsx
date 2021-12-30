
/*

Cheers - Reservations Page
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";


import ReservationFeed from "../../../src/Components/Reservations/ReservationFeed";
import ReservationsHeader from "../../../src/Components/Reservations/ReservationsHeader";


interface ReservationsProps {
	reservations: Array<any>;
}

const Reservations: React.FC<ReservationsProps> = ({ reservations }) => {

	const { data: session } = useSession();
	

	return (
		<>
			<Head>
				<title>Reservations</title>
			</Head>

			<main className="lg:container lg:mx-auto md:mx-5 sm:mx-5 py-16">

				{session && <ReservationsHeader />}

				{reservations.length !== 0 && session ? (
					reservations.map((reservation) => {
						return <ReservationFeed key={reservation} />;
					})
				) : (
					<div className="w-full flex items-center flex-col">
						<p>You need to sign up to see reservations</p>
						<Link href="/login">
							<p className="cursor-pointer text-yellow-400">Log In</p>
						</Link>
					</div>
				)}

			</main>
		</>
	);
};


export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			reservations: [1, 2, 3, 4, 5],
		},
	};
};


export default Reservations;
