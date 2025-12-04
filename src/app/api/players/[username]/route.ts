import ApiRequest from "../../../../api/ApiClient";
import {
  CHESS_API_BASE_URL,
  CHESS_API_ENDPOINTS,
} from "../../../../config/routes";
import { IPlayerDetails } from "../../../../interfaces/player.interface";
import HTTP_METHODS from "../../../../utils/httpsMethods";
import buildRoute from "../../../../utils/routeBuilder";

export const dynamic = "force-static";

interface RouteParams {
  params: {
    username: string;
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { username } = params;

    if (!username) {
      return Response.json(
        { error: "Missing username parameter" },
        { status: 400 },
      );
    }

    const response = await ApiRequest<{ player?: IPlayerDetails }>(
      HTTP_METHODS.GET,
      buildRoute(
        `${CHESS_API_BASE_URL}${CHESS_API_ENDPOINTS.PLAYER_DETAILS}`,
        params,
      ),
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

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Unexpected server error", details: `${error}` },
      { status: 500 },
    );
  }
}
