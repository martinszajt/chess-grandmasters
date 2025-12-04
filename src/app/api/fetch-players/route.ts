import ApiRequest from "../../../api/ApiClient";
import {
  CHESS_API_BASE_URL,
  CHESS_API_ENDPOINTS,
} from "../../../config/routes";
import { IPlayerListItem } from "../../../interfaces/player.interface";
import HTTP_METHODS from "../../../utils/httpsMethods";

export const dynamic = "force-static";

export async function GET() {
  try {
    const response = await ApiRequest<{ players?: string[] }>(
      HTTP_METHODS.GET,
      `${CHESS_API_BASE_URL}${CHESS_API_ENDPOINTS.TITLED_GRANDMASTERS}`,
    );
    const isError = response.data === null;

    if (isError) {
      return Response.json(
        {
          error: "Failed to fetch player data",
          details: response.error,
        },
        { status: response.status ?? 500 },
      );
    }
    const { data } = response;

    let players: IPlayerListItem[] = [];

    if (Array.isArray(data.players)) {
      players = data.players.map((id: string) => ({ id }));
    }

    return Response.json(players);
  } catch (error) {
    return Response.json(
      { error: "Unexpected server error", details: `${error}` },
      { status: 500 },
    );
  }
}
