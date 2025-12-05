"use client";

import React from "react";
import { Avatar } from "primereact/avatar";
import { Tag } from "primereact/tag";
import { IPlayerDetails } from "../../../interfaces/player.interface";

const PlayerHeader = ({ playerDetails }: { playerDetails: IPlayerDetails }) => (
  <div className="flex flex-col items-center">
    <Avatar
      label={playerDetails.title}
      size="xlarge"
      shape="circle"
      className="mb-3"
    />
    <h2 className="text-xl font-bold">{playerDetails.username}</h2>
    <Tag
      value={playerDetails.status}
      severity={playerDetails.status === "Online" ? "success" : "warning"}
    />
  </div>
);

export default PlayerHeader;
