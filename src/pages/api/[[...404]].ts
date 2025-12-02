import type { NextApiResponse } from "next";

export default async function handler(res: NextApiResponse) {
  res.status(404).json("Not Found");
}
