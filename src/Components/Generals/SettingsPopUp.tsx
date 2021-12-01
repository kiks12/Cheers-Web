import Link from "next/link";
import React from "react";

interface SettingsPopUpProps {}

const SettingsPopUp: React.FC<SettingsPopUpProps> = () => {
  return (
    <div
      className="absolute w-48 h-auto border p-2 rounded-md shadow-lg"
      style={{ top: "1.2rem", right: "0.1rem", backgroundColor: "#ffff" }}
    >
      <button className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all">
        Account Settings
      </button>
      <Link href="/login">
        <button className="py-2 px-5 text-sm flex items-center justify-center w-full hover:bg-gray-100 active:bg-gray-200 transition-all">
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default SettingsPopUp;
