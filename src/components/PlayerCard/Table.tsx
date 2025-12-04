"use client";

import React, { useRef } from "react";
import { DataView } from "primereact/dataview";
import { Toast } from "primereact/toast";
import { usePlayersData } from "../../hooks/usePlayersData";
import { IPlayerListItem } from "../../interfaces/player.interface";

const PlayersTable = () => {
  const { data: players, isLoading } = usePlayersData();
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

  const itemTemplate = (player: IPlayerListItem) => {
    if (!player) return null;

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
              Player #{player.id}
            </p>
          </div>
        </div>
      </div>
    );
  };

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
        {players && players.length > 0 ? (
          <>
            {header}

            <div className="overflow-y-auto flex-1 p-5">
              <DataView
                value={players}
                layout="list"
                itemTemplate={itemTemplate}
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
