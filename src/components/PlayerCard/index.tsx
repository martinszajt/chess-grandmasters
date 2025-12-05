"use client";

import React from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Tag } from "primereact/tag";
import { IPlayerDetails } from "../../interfaces/player.interface";

interface PlayerCardProps {
  isLoading: boolean;
  playerDetails?: IPlayerDetails | null;
}

const PlayerCard = ({ isLoading, playerDetails }: PlayerCardProps) => {
  if (isLoading) return <div>Loading...</div>;
  if (!playerDetails) return null;

  const joinedDate = new Date(playerDetails.joined * 1000).toLocaleDateString();
  const lastOnlineDate = new Date(
    playerDetails.last_online * 1000,
  ).toLocaleDateString();

  const header = (
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
      ></Tag>
    </div>
  );

  return (
    <div className="col-12 sm:col-6 md:col-4 lg:col-3 p-2">
      <Card header={header} className="shadow-2">
        <div className="space-y-2">
          <p>
            <strong>Player ID:</strong> {playerDetails.player_id}
          </p>
          <p>
            <strong>League:</strong> {playerDetails.league}
          </p>
          <p>
            <strong>Followers:</strong> {playerDetails.followers}
          </p>
          <p>
            <strong>Joined:</strong> {joinedDate}
          </p>
          <p>
            <strong>Last Online:</strong> {lastOnlineDate}
          </p>
          <p>
            <strong>Streaming Platforms:</strong>{" "}
            {playerDetails.streaming_platforms.length > 0
              ? playerDetails.streaming_platforms.join(", ")
              : "None"}
          </p>
          <p>
            <strong>Verified:</strong>
            <Badge
              value={playerDetails.verified ? "Yes" : "No"}
              severity={playerDetails.verified ? "success" : "danger"}
              className="ml-2"
            />
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PlayerCard;
