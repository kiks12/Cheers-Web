
const Filter = () => {
    return(
        <div className="w-full flex items-end justify-between mt-1 sticky pb-5 pt-2 bg-white" style={{backgroundColor: "white", top: "3rem"}}>
            <div className="flex flex-1 justify-start">
                <div className="flex-1 mr-5">
                    <p className="font-semibold mb-2">Type</p>
                    <select className="w-full h-10 bg-white border rounded-md px-2">
                        <option>Both</option>
                        <option>Bars</option>
                        <option>Clubs</option>
                    </select>
                </div>

                <div className="flex-1 mr-5">
                    <p className="font-semibold mb-2">Reviews</p>
                    <select className="w-full h-10 bg-white border rounded-md px-2">
                        <option>All</option>
                        <option>5 Stars</option>
                        <option>4 Stars</option>
                        <option>3 Stars</option>
                        <option>2 Stars</option>
                        <option>1 Star</option>
                    </select>
                </div>

                <div className="flex-1 mr-5">
                    <p className="font-semibold mb-2">Location</p>
                    <select className="w-full h-10 bg-white border rounded-md px-2">
                        <option>Near Me</option>
                        <option>Bars</option>
                        <option>Clubs</option>
                    </select>
                </div>

                <div className="flex-auto mr-5">
                    <p className="font-semibold mb-2">Price Range</p>
                    <p className="text-sm">P100.00</p>
                    <input type="range" className="w-full slider" min="50" max="1000"/>
                    <div className="thumb"></div>
                </div>
            </div>

            <button className="w-1/6 bg-black text-white font-light h-10 rounded-md">
                Apply
            </button>
        </div>
    )
}

export default Filter;