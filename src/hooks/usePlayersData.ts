"use client";

import { useQuery } from "@tanstack/react-query";
import { IPlayerListItem } from "../interfaces/player.interface";
import HTTP_METHODS from "../utils/httpsMethods";
import { MEXT_API_BASE_URL, NEXT_API_ENDPOINTS } from "../config/routes";
import ApiRequest from "../api/ApiClient";

const fetchPlayers = async ({ signal }: { signal?: AbortSignal }) => {
  const { data } = await ApiRequest<IPlayerListItem[]>(
    HTTP_METHODS.GET,
    `${MEXT_API_BASE_URL}${NEXT_API_ENDPOINTS.FETCH_PLAYERS}`,
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
