import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  const user = req.query.user;
  if (!token) {
    res.status(401).end();
    return
  }
  if (user === token?.name || user === token?.email) {
    // Db data retrieval
    res.status(201).json({ data: [], user })
    return;
  }
}