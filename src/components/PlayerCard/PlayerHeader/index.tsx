"use client";

import React from "react";
import { Tag } from "primereact/tag";
import { IPlayerDetails } from "../../../interfaces/player.interface";
import UserAvatar from "../../UserAvatar";

const PlayerHeader = ({ playerDetails }: { playerDetails: IPlayerDetails }) => (
  <div className="flex flex-col items-center space-y-4">
    <UserAvatar size="large" username={playerDetails.username} />
    <div className="flex items-center gap-3">
      <h2 className="text-xl font-bold">{playerDetails.username}</h2>
      <Tag
        value={playerDetails.status}
        severity={playerDetails.status === "Online" ? "success" : "warning"}
      />
      <Tag
        value={playerDetails.verified ? "Verified" : "Unverified"}
        severity={playerDetails.verified ? "success" : "danger"}
      />
    </div>
  </div>
);

export default PlayerHeader;
