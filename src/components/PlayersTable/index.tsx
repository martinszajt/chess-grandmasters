"use client";

import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import { Paginator } from "primereact/paginator";
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

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(16);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const paginatedPlayers = playerList?.slice(first, first + rows) || [];

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <Toast ref={toast} />

      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-700 flex flex-col h-[90vh] overflow-hidden">
        <div className="z-10 px-5 py-4 bg-gray-700 b-2">
          <h5 className="text-2xl font-semibold text-white">Grandmasters</h5>
        </div>

        <div className="relative flex-1 overflow-y-auto p-5 bg-gray-900">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-20">
              <ProgressSpinner />
              <p className="mt-2 text-white">Loading...</p>
            </div>
          )}

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
              isLoading ? "opacity-50" : ""
            }`}
          >
            {paginatedPlayers.map((player) => (
              <PlayerListCard key={player.username} playerItem={player} />
            ))}
          </div>
        </div>

        {playerList && playerList.length > rows && (
          <div className="px-5 py-3 bg-gray-800 border-t border-gray-700">
            <Paginator
              first={first}
              rows={rows}
              totalRecords={playerList.length}
              rowsPerPageOptions={[12, 24, 48]}
              onPageChange={onPageChange}
              className="justify-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayersTable;
