import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Link from "next/link";
import ActionButton from "../components/UI/ActionButton";
import Checkbox from "../components/UI/forms/Checkbox";
import Input from "../components/UI/forms/Input";
import { useState } from "react";
import { signInResponse } from "../types/api";
import signIn from "../utils/signIn";
import { useRouter } from "next/router";

YupPassword(Yup);

export default function Signin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const signInHandler = async (value: any) => {
    const { error, message, success } = await signIn(value);
    if (error) setError(error);
    if (message) setMessage(message);
    if (success) {
      setTimeout(() => router.push("/cart"), 1000);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    pass: "",
    terms: false,
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username required")
      .max(32, "Max 32 characters"),
    email: Yup.string()
      .email("Email format not correct")
      .required("Email required")
      .max(64, "Max 64 characters"),
    pass: Yup.string().required("Password required").password(),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions"),
  });
  return (
    <main className="flex justify-center items-center">
      <div className="p-4 rounded-xl border bg-slate-50 border-slate-300 w-11/12 max-w-sm flex flex-col items-center">
        <h2>Create an account</h2>
        {error && <span>{error}</span>}
        {message && <span>{message}</span>}
        <Formik
          initialValues={initialValues}
          onSubmit={signInHandler}
          validationSchema={validationSchema}
        >
          <Form className="my-8 flex flex-col gap-8 w-full">
            <Input label="Username" name="username" type="text" />
            <Input label="Email" name="email" type="email" />
            <Input label="Password" name="pass" type="password" />
            <Checkbox name="terms">
              I agree to the terms and conditions of the Front-End Store
            </Checkbox>
            <ActionButton primary type="submit">
              Sign in
            </ActionButton>
          </Form>
        </Formik>
        <Link href="/login">
          <a className="border-b border-slate-300 hover:border-slate-700 transition-all duration-200">
            Already have an account?
          </a>
        </Link>
      </div>
    </main>
  );
}
