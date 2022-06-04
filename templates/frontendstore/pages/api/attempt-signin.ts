import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import { authApiResponse } from "../../types/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<authApiResponse>
) {
  if (req.method === "POST") {
    const userData = req.body;
    // Data validation server side, check if the user already exists, if it doesn't
    // store it in the database
    // This should return a JWT to be interpreted by a auth library, like Next Auth
    res.status(201).json({
      message: "User created correctly",
      success: true,
      user: userData.username,
      sessionId: nanoid(12),
    });
  }
  res.status(400).end();
}
