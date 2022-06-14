import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import ActionButton from "../../UI/ActionButton";

export default function Payment({
  // onSubmit,
}: {
  // onSubmit: (values: any) => Promise<void>;
}) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const submitPaymentHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: router.basePath,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setErrorMsg(error.message!);
    } else {
      setErrorMsg("Unexpected error");
    }
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={submitPaymentHandler}>
      {errorMsg && <p>{errorMsg}</p>}
      <PaymentElement />
      <ActionButton primary>Pay now</ActionButton>
    </form>
  );
}
