import React from "react";
import Head from "next/head";
import Navbar from "../../../src/Components/Generals/Navbar/navbar";

interface AccountSettingsProps {}

const AccountSettings: React.FC<AccountSettingsProps> = () => {
	return (
		<>
			<Head>
				<title>Settings</title>
			</Head>
			<Navbar activePage="" />
			<main className="py-16 container mx-auto">
				<h1>Settings</h1>
			</main>
		</>
	);
};

export default AccountSettings;
