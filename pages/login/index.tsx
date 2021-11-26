// import Form from "../../src/Components/Form.tsx";

export default function Login(){

    return(
        <main className=" mx-auto h-screen">
            <div className="bg-gray-900 h-1/2 fixed inset-0 z-0"/>
            <div className="h-full flex flex-wrap justify-center items-center z-10">
                <div className="w-1/4 h-5/6 flex justify-center items-center z-10">
                    <form className="bg-white rounded-2xl h-full w-full shadow-md border-gray-200 border flex flex-col items-center p-4">
                        <div className="h-2/3 flex flex-col justify-between items-center">
                            <h1 className="text-4xl mt-4 font-bold">Cheers.</h1>

                            <div className="h-2/3 flex flex-col justify-around">
                                <div className="">
                                    <input type="text" className="w-full h-8 rounded-md p-4 mb-2 border-gray-200 border" placeholder="Email"/>
                                    <input type="Password" className="w-full rounded-md h-8 p-4 mt-2 border-gray-200 border" placeholder="Password"/>
                                    <div className="flex justify-between mt-2">

                                        <div className="flex justify-center items-center">
                                            <input type="checkbox" id="showPassword" className="w-4 h-4"/>
                                            <label for="showPassword" className="text-sm ml-1 cursor-pointer">Show Password</label>
                                        </div>

                                        <p className="text-sm text-yellow-400 cursor-pointer">Forgot Password?</p>
                                    </div>
                                </div>
                                <button className="h-10 w-full bg-gray-900 text-white rounded-md mb-6">
                                    Log In
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 w-full h-1/3 flex flex-col items-center justify-between">
                            <p className="text-md mt-5">Login With</p>
                            <div className="flex">
                                <div className="rounded-full h-12 w-12 shadow-md mr-2 cursor-pointer">
                                    <span>
                                        <i></i>
                                    </span>
                                </div>
                                <div className="rounded-full h-12 w-12 shadow-md ml-2 cursor-pointer">
                                    <span>
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                            <div className="flex">
                                <p>Don't have an Account?</p>
                                <p className="ml-2 text-yellow-400 cursor-pointer">Sign Up</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}