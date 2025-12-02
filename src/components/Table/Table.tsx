import React, { useRef } from "react";
import { DataView } from "primereact/dataview";
import { Toast } from "primereact/toast";
import { PlayerListItem } from "../../interfaces/player.interface";
import { usePlayersData } from "../../hooks/usePlayersData";

const Table = () => {
  const { data: players, isLoading } = usePlayersData(10);

  const toast = useRef<Toast>(null);

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Players</h5>
    </div>
  );

  const itemTemplate = (post: PlayerListItem) => {
    return (
      <div className="p-col-12 p-4 pt-8 pb-8 cursor-pointer" onClick={() => {}}>
        <div className="product-list-item">
          <div className="product-list-detail">
            <div className="product-name">{post.id}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="datatable-crud-demo">
      <Toast ref={toast} />

      <div className="card">
        {players && players.length > 0 ? (
          <>
            {header}
            <DataView
              value={players}
              layout={"grid"}
              itemTemplate={itemTemplate}
              paginator
              rows={10}
              loading={isLoading}
              dataKey="id"
            />
          </>
        ) : (
          <p>No players found.</p>
        )}
      </div>
    </div>
  );
};

export default Table;
