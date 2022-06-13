import { Form, Formik } from "formik";
import Input from "../../UI/forms/Input";

export default function CheckoutForm() {
  const submitHandler = (values: any) => {
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
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
              <Input label="Full Name" name="name" />
              <Input label="Email" name="email" type="email" />
            </div>
            <Input label="Address" name="direction" />
          </Form>
        </Formik>
      </div>
      <div className="mb-8">
        <h2 className="border-b border-slate-300 mb-8">Your payment details</h2>
        
      </div>
    </div>
  );
}
