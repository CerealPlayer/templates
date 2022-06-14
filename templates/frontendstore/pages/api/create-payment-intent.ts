import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../utils/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  }
  res.status(401).end();
}
