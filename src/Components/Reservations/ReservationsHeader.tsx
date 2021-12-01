import React, { useState } from "react";

interface ReservationsHeaderProps {}

const ALPHABETICAL = "Alphabetical";
const LATEST = "Latest";
const SPECIFIC_DATE = "Specific Date";

const handleSortByChange = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setSortBy: React.Dispatch<React.SetStateAction<string>>
) => {
  setSortBy(e.target.value);
};

const ReservationsHeader: React.FC<ReservationsHeaderProps> = () => {
  const [sortBy, setSortBy] = useState<string>("alphabetical");

  return (
    <div className="w-full mb-5 flex justify-between">
      <div className="flex">
        <h1 className="font-semibold text-xl flex-1 mr-10">Reservations</h1>
        <div className="flex items-center mr-5">
          <p className="mr-3 font-light text-sm">Sort By:</p>
          <select
            className="bg-white border rounded-md py-1 px-3 text-sm"
            value={sortBy}
            onChange={(e) => handleSortByChange(e, setSortBy)}
          >
            <option value={ALPHABETICAL}>Alphabetical</option>
            <option value={LATEST}>Latest</option>
            <option value={SPECIFIC_DATE}>Specific Date</option>
          </select>
        </div>

        {sortBy === SPECIFIC_DATE && (
          <div className="flex items-center">
            <p className="mr-3 font-light text-sm">Select Date</p>
            <input
              type="date"
              className="bg-white border text-sm py-1 px-3 rounded-md"
            />
          </div>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        <input
          className="bg-white border rounded-md w-72 p-1 mr-3 text-sm"
          placeholder="Search Reservation"
        />
        <button className="bg-black hover:bg-gray-700 active:bg-gray-400 text-white px-6 py-1 text-sm rounded-md ">
          Search
        </button>
      </div>
    </div>
  );
};

export default ReservationsHeader;
