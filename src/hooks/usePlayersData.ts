"use client";

import { useQuery } from "@tanstack/react-query";
import {
  IPlayerDetails,
  IPlayerListItem,
} from "../interfaces/player.interface";
import HTTP_METHODS from "../utils/httpsMethods";
import { MEXT_API_BASE_URL, NEXT_API_ENDPOINTS } from "../config/routes";
import ApiRequest from "../api/ApiClient";
import buildRoute from "../utils/routeBuilder";

const fetchPlayerList = async ({ signal }: { signal?: AbortSignal }) => {
  const { data } = await ApiRequest<IPlayerListItem[]>(
    HTTP_METHODS.GET,
    `${MEXT_API_BASE_URL}${NEXT_API_ENDPOINTS.FETCH_PLAYERS}`,
    signal,
  );
  return data;
};

const fetchPlayerDetail = async (username: string, signal?: AbortSignal) => {
  const { data } = await ApiRequest<IPlayerDetails>(
    HTTP_METHODS.GET,
    buildRoute(`${MEXT_API_BASE_URL}${NEXT_API_ENDPOINTS.GET_PLAYER_DETAILS}`, {
      username,
    }),
    signal,
  );

  return data;
};

export const usePlayerList = () => {
  return useQuery({
    queryKey: ["playerList"],
    queryFn: fetchPlayerList,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const usePlayerDetails = (username: string) => {
  return useQuery({
    queryKey: ["playerDetails", username],
    queryFn: ({ signal }) => fetchPlayerDetail(username, signal),
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
