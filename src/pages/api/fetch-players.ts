import type { NextApiRequest, NextApiResponse } from "next";
import HTTP_METHODS from "../../utils/httpsMethods";
import serverRequest from "../../api/serverRequest";
import { IPlayerListItem } from "../../interfaces/player.interface";
import { SERVER_ENDPOINTS } from "../../config/routes";

type Response = IPlayerListItem[];

type ApiResponse = {
  players: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | { error: string }>,
) {
  try {
    if (
      !req.method ||
      !Object.values(HTTP_METHODS).includes(req.method as HTTP_METHODS)
    ) {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const response = await serverRequest<ApiResponse>({
      method: req.method as HTTP_METHODS,
      endPoint: SERVER_ENDPOINTS.TITLED_GRANDMASTERS,
      req,
    });

    if (response?.data?.players && Array.isArray(response.data.players)) {
      const result: IPlayerListItem[] = response.data.players.map((id) => ({
        id,
      }));
      return res.status(response.status).json(result);
    }
    return res.status(404).json({ error: "Players not found" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
