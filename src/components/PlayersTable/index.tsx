"use client";

import React, { useRef } from "react";
import { DataView } from "primereact/dataview";
import { Toast } from "primereact/toast";
import PlayerListCard from "./PlayerListCard";
import { IPlayerListItem } from "../../interfaces/player.interface";

const PlayersTable = ({
  isLoading,
  playerList,
}: {
  isLoading: boolean;
  playerList?: IPlayerListItem[] | null;
}) => {
  const toast = useRef<Toast>(null);

  const header = (
    <div
      className="
      sticky top-0 z-10 
      bg-white/90 
      backdrop-blur 
      px-5 py-4 
      border-b border-gray-200
    "
    >
      <h5 className="text-2xl font-semibold text-gray-800">Players</h5>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Toast ref={toast} />

      <div
        className="
          bg-white rounded-2xl shadow-xl 
          border border-gray-200 overflow-hidden 
          flex flex-col h-[75vh]
        "
      >
        {playerList && playerList.length > 0 ? (
          <>
            {header}

            <div className="overflow-y-auto flex-1 p-5">
              <DataView
                value={playerList}
                layout="list"
                itemTemplate={PlayerListCard}
                dataKey="id"
                paginator={false}
                loading={isLoading}
              />
            </div>
          </>
        ) : (
          <p className="p-6 text-center text-gray-500">No players found.</p>
        )}
      </div>
    </div>
  );
};

export default PlayersTable;
