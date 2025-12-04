"use client";

import React from "react";
import { IPlayerDetails } from "../../interfaces/player.interface";

const PlayerCard = ({
  isLoading,
  playerDetails,
}: {
  isLoading: boolean;
  playerDetails?: IPlayerDetails | null;
}) => {
  if (!playerDetails) return null;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="col-12 sm:col-6 md:col-4 lg:col-3 p-2">
      <div
        className="
          p-4 bg-white rounded-xl border border-gray-200 shadow-sm 
          hover:shadow-lg hover:-translate-y-1 
          transition cursor-pointer flex flex-col items-center text-center
        "
      >
        <div
          className="
            w-16 h-16 rounded-full bg-indigo-100 
            flex items-center justify-center mb-3
          "
        ></div>

        <div className="space-y-1">
          <p className="text-lg font-bold text-gray-800">
            Player #{playerDetails.player_id}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-lg font-bold text-gray-800">
            Player Name{playerDetails.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
