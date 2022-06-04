import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import { signInResponse } from "../../types/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<signInResponse>
) {
  if (req.method === "POST") {
    const userData = req.body;
    // Data validation server side, check if the user already exists, if it doesn't
    // store it in the database
    res.status(201).json({
      message: "User created correctly",
      success: true,
      user: userData.username,
      sessionId: nanoid(12),
    });
  }
  res.status(400).end();
}
