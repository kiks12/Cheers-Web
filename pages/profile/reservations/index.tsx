import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Navhar from "../../../src/Components/Generals/navbar";

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
        <div></div>
        <h1 className="font-semibold text-xl">Reservations</h1>
        {reservations.length !== 0 ? (
          reservations.map((reservation) => {
            return <p key={reservation}>Reserve</p>;
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
