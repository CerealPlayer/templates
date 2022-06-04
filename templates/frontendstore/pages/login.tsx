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
    user: "",
    pass: "",
  };
  const validationSchema = Yup.object({
    user: Yup.string()
      .required("User login method required")
      .max(64, "Max 64 characters"),
    pass: Yup.string().required("Password required"),
  });
  return (
    <main className="flex justify-center items-center">
      <div className="p-4 rounded-xl border bg-slate-50 border-slate-300 w-11/12 max-w-sm flex flex-col items-center">
        <h2>Login to your account</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={signInHandler}
          validationSchema={validationSchema}
        >
          <Form className="my-8 flex flex-col gap-8 w-full">
            <Input label="Username or email" name="user" type="text" />
            <Input label="Password" name="pass" type="password" />
            <ActionButton primary type="submit">
              Log in
            </ActionButton>
          </Form>
        </Formik>
        <Link href="/signin">
          <a className="border-b border-slate-300 hover:border-slate-700 transition-all duration-200">
            No account?
          </a>
        </Link>
      </div>
    </main>
  );
}
