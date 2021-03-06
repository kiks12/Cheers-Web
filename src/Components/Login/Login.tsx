
/*

Cheers - Login UI Component
Created: Jan. 5, 2022
Last Updated: Jan. 22, 2022
Author: Tolentino, Francis James S.

*/


import React from 'react';
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { signIn } from 'next-auth/react';


type SignInCallbackURL = "http://localhost:3000/";


const SIGNIN_CALLBACK_URL : SignInCallbackURL = "http://localhost:3000/";


const LoginUI: React.FC = () => {


    return(
	    <main className=' mx-auto h-screen'>
			<div className='bg-black h-1/2 fixed inset-0 z-0 skew-x-12' />
			<div className='h-full flex flex-wrap justify-center items-center z-10'>
				<div className='lg:w-1/4 md:1/6 h-5/6 flex justify-center items-center z-10'>
				<form
					className='rounded-2xl h-full w-full shadow-md border-gray-200 border flex flex-col items-center p-4'
					style={{ backgroundColor: "white" }}>
					<div className='h-2/3 flex flex-col justify-between items-center'>
					<h1 className='text-4xl mt-4 font-bold'>Cheers.</h1>

					<div className='h-2/3 flex flex-col justify-around'>
						<div className=''>
						<input
							type='text'
							className='w-full h-8 rounded-md p-4 mb-2 border-gray-200 border text-sm'
							placeholder='Email'
						/>
						<input
							type='Password'
							className='w-full rounded-md h-8 p-4 mt-2 border-gray-200 border text-sm'
							placeholder='Password'
						/>
						<div className='flex justify-between mt-2'>
							<div className='flex justify-center items-center'>
							<input
								type='checkbox'
								id='showPassword'
								className='w-4 h-4'
							/>
							<label
								htmlFor='showPassword'
								className='text-xs ml-1 cursor-pointer'>
								Show Password
							</label>
							</div>

							<p className='text-xs text-yellow-400 cursor-pointer'>
							Forgot Password?
							</p>
						</div>
						</div>

						<Link href='/' passHref={true}>
						<button className='w-full my-3 py-2 bg-black text-white text-sm border border-black'>
							Log In
						</button>
						</Link>

						<Link href='/' passHref={true}>
						<button className='w-full py-2 text-black text-sm mb-6 border border-black hover:bg-black hover:text-white transition-all'>
							Continue as guest
						</button>
						</Link>
					</div>
					</div>
					<div className='border-t border-gray-200 w-full h-1/3 flex flex-col items-center justify-between'>
					<p className='text-sm mt-5'>Login With</p>
					<div className='flex'>
						<div
						className='rounded-full h-12 w-12 shadow-md mr-2 cursor-pointer flex items-center justify-center hover:shadow-lg transition-all'
						onClick={() =>
							signIn("google", {
							callbackUrl: SIGNIN_CALLBACK_URL,
							})
						}>
						<FcGoogle size={38} />
						</div>
						<div
						className='rounded-full h-12 w-12 shadow-md ml-2 cursor-pointer flex items-center justify-center hover:shadow-lg transition-all'
						onClick={() => {
							signIn("facebook", {
							callbackUrl: SIGNIN_CALLBACK_URL,
							});
						}}>
						<BsFacebook color='#1977F3' size={32} />
						</div>
					</div>
					<div className='flex text-sm'>
						<p>{"Don't have an Account?"}</p>
						<p className='ml-2 text-yellow-400 cursor-pointer'>
						Sign Up
						</p>
					</div>
					</div>
				</form>
				</div>
			</div>
		</main>
    )
}


export default LoginUI;