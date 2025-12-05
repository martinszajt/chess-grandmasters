"use client";

import React from "react";
import Link from "next/link";

const ViewHeader = () => {
  return (
    <div className="col-12 sm:col-6 md:col-4 lg:col-3 p-4 flex justify-start">
      <Link
        href="/players"
        className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
      >
        Back to all players
      </Link>
    </div>
  );
};

export default ViewHeader;
