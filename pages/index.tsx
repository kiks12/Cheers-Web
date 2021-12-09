import Head from "next/head";
import Navhar from "../src/Components/Generals/Navbar/navbar";
import Featured from "../src/Components/Feed/Featured";
import Feed from "../src/Components/Feed/Feed";
import { NextPage } from "next";
import Router from "next/router";

const Home : NextPage= () => {

	Router.events.on("routeChangeStart", () => {
		console.log("route changing");
	})


	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Navhar activePage="home" />
			<main className="lg:container md:mx-5 sm:mx-5 lg:mx-auto h-full py-16 flex flex-col items-center">
				<Featured />
				<Feed />
			</main>
		</>
	);
};

export default Home;
