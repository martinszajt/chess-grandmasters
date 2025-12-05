"use client";

import React from "react";
import { Tag } from "primereact/tag";
import { IPlayerDetails } from "../../../interfaces/player.interface";
import UserAvatar from "../../UserAvatar";

const PlayerHeader = ({ playerDetails }: { playerDetails: IPlayerDetails }) => (
  <div className="flex flex-col items-center">
    <UserAvatar size="large" username={playerDetails.username} />
    <h2 className="text-xl font-bold">{playerDetails.username}</h2>
    <Tag
      value={playerDetails.status}
      severity={playerDetails.status === "Online" ? "success" : "warning"}
    />
  </div>
);

export default PlayerHeader;
