import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Navhar from "../../../src/Components/Generals/navbar";
import ReservationFeed from "../../../src/Components/Reservations/ReservationFeed";
import ReservationsHeader from "../../../src/Components/Reservations/ReservationsHeader";

interface ReservationsProps {
  reservations: Array<any>;
}

const Reservations: React.FC<ReservationsProps> = ({ reservations }) => {
  return (
    <>
      <Head>
        <title>Reservations</title>
      </Head>
      <Navhar activePage="reservations" />
      <main className="container mx-auto py-16">
        <ReservationsHeader />
        {reservations.length !== 0 ? (
          reservations.map((reservation) => {
            return <ReservationFeed key={reservation} />;
          })
        ) : (
          <p>No Reservations to Show</p>
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
