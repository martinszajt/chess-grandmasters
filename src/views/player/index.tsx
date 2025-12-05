"use client";

import PlayerCard from "../../components/PlayerCard";
import { usePlayerDetails } from "../../hooks/usePlayersData";

const PlayerView = ({ username }: { username: string }) => {
  const { data: player, isLoading } = usePlayerDetails(username);
  return (
    <>
      <PlayerCard playerDetails={player} isLoading={isLoading} />
    </>
  );
};

export default PlayerView;
