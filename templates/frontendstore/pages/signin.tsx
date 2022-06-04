import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Link from "next/link";
import ActionButton from "../components/UI/ActionButton";
import Checkbox from "../components/UI/forms/Checkbox";
import Input from "../components/UI/forms/Input";

YupPassword(Yup);

export default function Signin() {
  const signInHandler = (value: any) => {
    console.log(value);
  };
  const initialValues = {
    username: "",
    email: "",
    pass: "",
    terms: false,
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Username required").max(32, "Max 32 characters"),
    email: Yup.string()
      .email("Email format not correct")
      .required("Email required").max(64, "Max 64 characters"),
    pass: Yup.string().required("Password required").password(),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions"),
  });
  return (
    <main className="flex justify-center items-center">
      <div className="p-4 rounded-xl border bg-slate-50 border-slate-300 w-11/12 max-w-sm flex flex-col items-center">
        <h2>Create an account</h2>
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
          <a className="text-slate-500 underline underline-offset-8">
            Already have an account?
          </a>
        </Link>
      </div>
    </main>
  );
}
