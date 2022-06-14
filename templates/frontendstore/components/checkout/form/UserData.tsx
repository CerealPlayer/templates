import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Form, Formik } from "formik";
import { useQuery } from "react-query";
import Input from "../../UI/forms/Input";
import Payment from "./Payment";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

export default function UserData() {
  const { data, error, isLoading } = useQuery("clientSecret", async () => {
    const result = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!result.ok) {
      throw new Error("Unable to create payment intent");
    }
    return await result.json();
  });
  const options: StripeElementsOptions = {
    clientSecret: data ? data.clientSecret : "",
    appearance: {
      theme: "stripe",
    },
  };
  const submitHandler = async (values: any) => {
    console.log(values);
  };
  return (
    <div className="bg-slate-50 border border-slate-300 rounded-xl py-4 px-4 lg:px-12">
      <div className="mb-8">
        <h2 className="border-b border-slate-300 mb-8">Your Data</h2>
        <Formik
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
        {!isLoading && !error && data.clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <Payment />
          </Elements>
        )}
      </div>
    </div>
  );
}
