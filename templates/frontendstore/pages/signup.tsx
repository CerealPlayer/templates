import { signIn } from "next-auth/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Link from "next/link";
import ActionButton from "../components/UI/btns/ActionButton";
import Checkbox from "../components/UI/forms/Checkbox";
import Input from "../components/UI/forms/Input";
import { RedirectableProviderType } from "next-auth/providers";
import { useRouter } from "next/router";
import Section from "../components/UI/containers/Section";

YupPassword(Yup);

export default function Signup() {
  const { push, query } = useRouter();
  const signUpHandler = async (value: any) => {
    const result = await signIn<RedirectableProviderType>("credentials", {
      redirect: false,
      user: value.username,
      email: value.email,
      pass: value.pass,
      terms: value.terms,
      proto: "login",
    });
    if (result && result.ok) {
      const isRefCart = query.ref === "cart";
      push(isRefCart ? "/cart" : `/user/${value.user}`);
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
    <Section>
      <div className="flex justify-center items-center">
        <div className="p-4 rounded-xl border bg-slate-50 border-slate-300 w-11/12 max-w-sm flex flex-col items-center">
          <h2>Create an account</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={signUpHandler}
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
                Sign up
              </ActionButton>
            </Form>
          </Formik>
          <Link href="/login">
            <a className="border-b border-slate-300 hover:border-slate-700 transition-all duration-200">
              Already have an account?
            </a>
          </Link>
        </div>
      </div>
    </Section>
  );
}
