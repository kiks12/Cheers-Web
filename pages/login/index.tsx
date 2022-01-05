
/*

Cheers - Login Page
Last Updated: Jan. 5, 2022
Tolentino, Francis James S.

*/


import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { getSession, useSession } from "next-auth/react";


import ReactLoading from "react-loading";
import { GetServerSideProps } from "next";


const DynamicLoginUI = dynamic(() => import('../../src/Components/Login/Login'), {
		loading: () => (
			<p>asdfsadfas</p>
		)
	}
)


const Login = () => {

  	const { status: status } = useSession();
	
	return (
		<>
		<Head>
			<title>Login</title>
		</Head>

		{status === "loading" && (
			<div className='h-screen w-screen flex items-center justify-center'>
			<ReactLoading
				type='spinningBubbles'
				color='#2d2d2d'
				height='100px'
				width='100px'
			/>
			</div>
		)}

		<DynamicLoginUI />
		</>
	);
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {

	const session = await getSession(ctx);
	
	if(!session){
		return {
			props: {}
		}
	}

	return {
		redirect: {
			permanent: false,
			destination: "/",
		},
		props: {}
	}
}


export default Login;