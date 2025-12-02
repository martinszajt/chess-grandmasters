import type { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "../../interfaces/post.interface";
import HTTP_METHODS from "../../utils/httpsMethods";
import { API_ENDPOINTS } from "../../config/routes";
import serverRequest from "../../api/serverRequest";

type Response = IPost[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const response = await serverRequest<Response>({
    method: req.method as HTTP_METHODS,
    endPoint: API_ENDPOINTS.POSTS,
    req,
  });

  res.status(response.status).json(response.data);
}
