import { useState } from "react";
import Input from "../UI/forms/Input";
import ActionButton from "../UI/btns/ActionButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Select from "../UI/forms/Select";

export default function Filter() {
  const [message, setMessage] = useState("");
  const filterHandler = (values: { search: string }) => {
    setMessage("I will be implementing this in the near future");
  };
  return (
    <div className="w-full flex flex-col gap-4 items-center bg-neutral-200 px-4 py-8">
      <Formik
        initialValues={{ search: "", order: "", cat: "", brand: "" }}
        validationSchema={Yup.object({
          search: Yup.string().min(3, "At least 3 characters to search"),
          order: Yup.string(),
          cat: Yup.string(),
          brand: Yup.string(),
        })}
        onSubmit={filterHandler}
        className="max-w-xs w-full"
      >
        <Form className="w-full">
          <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:justify-between">
            <Input name="search" label="Search by term" />
            <Select name="order" label="Order by">
              <option value="">Chose an option</option>
              <option value="downloads">Weekly downloads</option>
              <option value="stars">Stars on github</option>
            </Select>
            <Select name="cat" label="Category">
              <option value="">Chose an option</option>
              <option value="frontend">Front-end</option>
              <option value="fullstack">Full stack</option>
            </Select>
            <Select name="brand" label="Brand">
              <option value="">Chose an option</option>
              <option value="meta">Facebook</option>
              <option value="google">Google</option>
            </Select>
          </div>
          <div className="flex max-w-2xl gap-4 mx-auto">
            <ActionButton type="button">Clear filters</ActionButton>
            <ActionButton primary type="submit">
              Apply
            </ActionButton>
          </div>
        </Form>
      </Formik>
      {message && <span>{message}</span>}
    </div>
  );
}
