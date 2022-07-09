import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Form, Formik, FormikProps } from "formik";
import { useQuery } from "react-query";
import ErrorMsg from "../../UI/notifications/ErrorMsg";
import Input from "../../UI/forms/Input";
import Spinner from "../../UI/states/Spinner";
import Payment from "./Payment";
import { useRef } from "react";
import { cartContent } from "../../../types/props";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

const MILISECONDS_IN_TEN_MINUTES = 10 * 60 * 1000;

export default function UserData({ cart }: { cart: cartContent }) {
  const formikRef =
    useRef<FormikProps<{ name: string; email: string; direction: string }>>(
      null
    );

  const { data, error, isLoading } = useQuery<
    { clientSecret: string; paymentIntentId: string },
    Error
  >(
    "clientSecret",
    async () => {
      const result = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      if (!result.ok) {
        throw new Error("Unable to create payment intent");
      }
      return await result.json();
    },
    { staleTime: MILISECONDS_IN_TEN_MINUTES }
  );

  if (!data) {
    return (
      <>
        {isLoading && <Spinner />}
        {error && <ErrorMsg>{error.message}</ErrorMsg>}
      </>
    );
  }
  
  const options: StripeElementsOptions = {
    clientSecret: data.clientSecret,
    fonts: [
      {
        cssSrc:
          "https://fonts.googleapis.com/css2?family=Prompt:wght@100;300;400;500;700;900&display=swap",
      },
    ],
    appearance: {
      theme: "stripe",
      variables: {
        spacingGridRow: "2rem",
        fontFamily: "Prompt, sans-serif",
      },
      rules: {
        ".Input": {
          backgroundColor: "#F8FAFC",
          color: "#475569",
          border: "solid 2px #64748b4d",
          padding: "4px 16px",
          lineHeight: "1.5rem",
        },
        ".Input:focus": {
          borderColor: "#64748B",
          boxShadow: "none",
        },
      },
    },
  };
  const submitHandler = async () => {
    const userData = formikRef.current?.values;
    const pi = data?.paymentIntentId;
    // TODO Api endpoint to save order data
    return {
      email: userData?.email,
      saveDataHandler: (receivedPi: string) =>
        console.log(userData, pi, receivedPi),
    };
  };
  return (
    <div className="bg-slate-50 border border-slate-300 rounded-xl py-4 px-4 lg:px-12">
      <div className="mb-8">
        <h2 className="border-b border-slate-300 mb-8">Your Data</h2>
        <Formik
          innerRef={formikRef}
          initialValues={{
            name: "",
            email: "",
            direction: "",
          }}
          onSubmit={submitHandler}
        >
          <Form className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <Input label="Full Name" name="name" />
              <Input label="Email" name="email" type="email" />
            </div>
            <Input label="Address" name="direction" />
          </Form>
        </Formik>
      </div>
      <div className="mb-8">
        <h2 className="border-b border-slate-300 mb-8">Your payment details</h2>
        <Elements stripe={stripePromise} options={options}>
          <Payment onSubmit={submitHandler} />
        </Elements>
      </div>
    </div>
  );
}
