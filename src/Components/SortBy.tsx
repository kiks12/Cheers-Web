
const SortBy = () => {
    return(
        <div className="mt-10 w-full">
            <p className="mb-2">Sort By:</p>
            <select className="h-10 w-48 px-2 bg-white border rounded-md">
                <option>Location</option>
                <option>Reviews</option>
            </select>
        </div>
    )
}

export default SortBy;