import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import ActionButton from "../../UI/btns/ActionButton";

export default function Payment({
  onSubmit,
}: {
  onSubmit: () => Promise<{
    email: string | undefined;
    saveDataHandler: (receivedPi: string) => void;
  }>;
}) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const submitPaymentHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    const { email, saveDataHandler } = await onSubmit();
    if (!stripe || !elements) return;
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        receipt_email: email,
      },
      redirect: "if_required",
    });
    if (!error) {
      saveDataHandler(paymentIntent.id);
    } else if (
      error.type === "card_error" ||
      error.type === "validation_error"
    ) {
      setErrorMsg(error.message!);
    } else {
      setErrorMsg("Unexpected error");
    }
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={submitPaymentHandler}>
      {errorMsg && <p>{errorMsg}</p>}
      <PaymentElement />
      <ActionButton primary type={"submit"}>
        Pay now
      </ActionButton>
    </form>
  );
}
