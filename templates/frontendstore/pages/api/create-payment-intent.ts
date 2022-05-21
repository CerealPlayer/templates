import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK!, {
  apiVersion: "2020-08-27",
});

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
}
