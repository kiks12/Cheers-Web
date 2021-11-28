import { MdStar } from "react-icons/md";

const Featured = () => {
    return(
        <div className="w-full flex flex-col items-center cursor-pointer">
            <div className="w-full">
                <p className="font-light">Featured by Cheers</p>
            </div>

            <div className="h-72 w-full rounded-2xl p-4 flex justify-between mt-1 shadow-lg hover:w-full-hover hover:shadow-2xl hover:h-80 transition-all relative featured"
                style={{
                    backgroundImage: "url(bar-goto-nyc-bar-interior-Alex-lau.jpeg)",
                    backgroundSize: "contain",
                }}>
                
                <div className="flex flex-col justify-start z-10">
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

                <div className="w-1/4 h-full bg-white rounded-xl flex items-center justify-center z-10">
                    Map
                </div>
            </div>
        </div>
    )
}

export default Featured;