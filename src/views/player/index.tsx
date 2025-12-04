"use client";

import PlayerCard from "../../components/PlayerCard";
import { usePlayerDetails } from "../../hooks/usePlayersData";

export default function PlayerView({ username }: { username: string }) {
  const { data: player, isLoading } = usePlayerDetails(username);
  return (
    <>
      <PlayerCard playerDetails={player} isLoading={isLoading} />
    </>
  );
}
