"use client";

import React from "react";
import { Card } from "primereact/card";
import { Badge } from "primereact/badge";
import { ProgressSpinner } from "primereact/progressspinner";
import { IPlayerDetails } from "../../interfaces/player.interface";
import StatCard from "./StatCard";
import PlayerHeader from "./PlayerHeader";
import OnlineClock from "./OnlineClock";

interface PlayerCardProps {
  isLoading: boolean;
  playerDetails?: IPlayerDetails | null;
}

const PlayerCard = ({ isLoading, playerDetails }: PlayerCardProps) => {
  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <ProgressSpinner />
      </div>
    );
  if (!playerDetails) return null;

  const joinedDate = new Date(playerDetails.joined * 1000).toLocaleDateString();
  const lastOnlineDate = new Date(playerDetails.last_online * 1000);

  return (
    <div className="col-12 sm:col-6 md:col-4 lg:col-3 p-2 bg-gray-900 pt-8">
      <Card
        header={<PlayerHeader playerDetails={playerDetails} />}
        className="shadow-2 text-white bg-gray-900"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 bg-gray-900">
          <StatCard label="Player ID" value={playerDetails.player_id} />

          <StatCard label="League" value={playerDetails.league} />

          <StatCard label="Followers" value={playerDetails.followers} />

          <StatCard label="Joined" value={joinedDate} />

          <StatCard
            label="Last Online"
            value={<OnlineClock date={lastOnlineDate} />}
          />

          <StatCard
            label="Streaming"
            value={
              playerDetails.streaming_platforms.length > 0
                ? playerDetails.streaming_platforms.join(", ")
                : "None"
            }
          />

          <StatCard
            label="Verified"
            value={
              <Badge
                value={playerDetails.verified ? "Yes" : "No"}
                severity={playerDetails.verified ? "success" : "danger"}
              />
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default PlayerCard;
