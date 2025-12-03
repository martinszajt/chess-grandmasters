"use client";

import { useQuery } from "@tanstack/react-query";
import { IPlayerListItem } from "../interfaces/player.interface";
import nextApiRequest from "../api/nextApiRequest";
import HTTP_METHODS from "../utils/httpsMethods";
import { MEXT_API_ENDPOINTS } from "../config/routes";

const fetchPlayers = async ({ signal }: { signal?: AbortSignal }) => {
  const { data } = await nextApiRequest<IPlayerListItem[]>(
    HTTP_METHODS.GET,
    MEXT_API_ENDPOINTS.FETCH_PLAYERS,
    signal,
  );
  return data;
};

export const usePlayersData = () => {
  return useQuery({
    queryKey: ["players"],
    queryFn: fetchPlayers,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export { fetchPlayers };
