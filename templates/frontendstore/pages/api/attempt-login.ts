import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import { authApiResponse } from "../../types/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<authApiResponse>
) {
  if (req.method === "POST") {
    const userData = req.body;
    // Data validation server side, retrieve user from db, if it exists, respond with
    // a success status
    // This should return a JWT to be interpreted by a auth library, like Next Auth
    res.status(201).json({
      message: "User login data is correct",
      success: true,
      user: userData.user,
      sessionId: nanoid(12),
    });
  }
  res.status(400).end();
}
