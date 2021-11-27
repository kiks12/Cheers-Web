import { MdStar } from "react-icons/md";

const Featured = () => {
    return(
        <>
            <p className="font-light">Featured by Cheers</p>
            <div className="h-72 bg-black w-full rounded-2xl hover:w-screen p-4 flex justify-between mt-1 shadow-lg">
                <div className="">
                    <h1 className="text-white font-bold text-6xl">Bar Name</h1>

                    <div className="flex items-center mt-1">
                        <p className="font-light text-white mr-2">Reviews</p>
                        <div className="flex">
                            <MdStar color="yellow" size={20}/>
                            <MdStar color="yellow" size={20}/>
                            <MdStar color="yellow" size={20}/>
                            <MdStar color="yellow" size={20}/>
                            <MdStar color="yellow" size={20}/>
                        </div>
                    </div>
                </div>

                <div className="w-1/4 h-full bg-white rounded-xl flex items-center justify-center">
                    Map
                </div>

            </div>
        </>
    )
}

export default Featured;