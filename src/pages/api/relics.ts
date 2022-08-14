import { queryRelics } from "@db/queryRelics";
import type { NextApiRequest, NextApiResponse } from "next";

// DynamoDBからデータを取得する
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toLocaleLowerCase() !== "get") {
    return res.status(405).end();
  }

  // const { userId } = req.query;
  const userId = "1";

  if (typeof userId !== "string") {
    res.status(400).end();
  }

  const rawData = await queryRelics({ user_id: Number(userId) });
  res.status(200).json(rawData);
};
