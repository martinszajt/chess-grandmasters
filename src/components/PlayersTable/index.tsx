"use client";

import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import PlayerListCard from "./PlayerListCard";
import { IPlayerListItem } from "../../interfaces/player.interface";

interface PlayersTableProps {
  isLoading: boolean;
  playerList?: IPlayerListItem[] | null;
}

const PlayersTable: React.FC<PlayersTableProps> = ({
  isLoading,
  playerList,
}) => {
  const toast = useRef<Toast>(null);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Toast ref={toast} />

      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-700 flex flex-col h-[75vh] overflow-hidden">
        <div className="sticky top-0 z-10 px-5 py-4 bg-gray-700 backdrop-blur">
          <h5 className="text-2xl font-semibold text-white">Grandmasters</h5>
        </div>

        <div className="relative overflow-y-auto flex-1 p-5 bg-gray-900">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-20">
              <ProgressSpinner />
              <p className="mt-2 text-white">Loading...</p>
            </div>
          )}

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${isLoading ? "opacity-50" : ""}`}
          >
            {playerList &&
              playerList.map((player) => (
                <PlayerListCard key={player.username} playerItem={player} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersTable;
