import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IPlayerListItem } from "../interfaces/player.interface";
import nextApiRequest from "../api/nextApiRequest";
import HTTP_METHODS from "../utils/httpsMethods";
import { MEXT_API_ENDPOINTS } from "../config/routes";

const fetchplayers = async (abortSignal?: AbortSignal) => {
  const { data } = await nextApiRequest<IPlayerListItem[]>(
    HTTP_METHODS.GET,
    MEXT_API_ENDPOINTS.FETCH_PLAYERS,
    abortSignal,
  );
  const result = data;

  return result;
};

const usePlayersData = () => {
  const queryClient = useQueryClient();

  return useQuery(["players"], ({ signal }) => fetchplayers(signal), {
    onSettled() {
      queryClient.removeQueries({ queryKey: ["players"], type: "inactive" });
    },
  });
};

export { usePlayersData, fetchplayers };
