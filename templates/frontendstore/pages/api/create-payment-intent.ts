import type { NextApiRequest, NextApiResponse } from "next";
import { calcPrice } from "../../helpers/client";
import { stripe } from "../../utils/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const cart = req.body;
    // Add validation to cart instead of passing array from request to calc price func
    const price = calcPrice(cart);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.floor(price * 100),
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res
      .status(201)
      .json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      });
  }
  res.status(401).end();
}
