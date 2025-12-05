"use client";

import PlayerCard from "../../components/PlayerCard";
import { usePlayerDetails } from "../../hooks/usePlayersData";
import ViewHeader from "../../components/ViewHeader";

const PlayerView = ({ username }: { username: string }) => {
  const { data: player, isLoading } = usePlayerDetails(username);
  return (
    <>
      <ViewHeader />
      <PlayerCard playerDetails={player} isLoading={isLoading} />
    </>
  );
};

export default PlayerView;
