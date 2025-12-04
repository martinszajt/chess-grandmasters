"use client";

import PlayersTable from "../../components/PlayersTable";
import { usePlayerList } from "../../hooks/usePlayersData";

export default function HomepageView() {
  const { data: players, isLoading } = usePlayerList();
  return (
    <>
      <PlayersTable playerList={players} isLoading={isLoading} />
    </>
  );
}
