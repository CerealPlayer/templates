import { FieldHookConfig, useField } from "formik";
import { type } from "os";

type labeled = {
  label: string;
};

export default function Input({
  label,
  ...props
}: FieldHookConfig<string> & labeled) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col justify-start w-full">
      <label
        className="text-base text-neutral-600"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        style={{ MozAppearance: "textfield", WebkitAppearance: "textfield" }}
        className="py-1 px-4 border-2 border-gris-700 outline-none bg-slate-50 border-opacity-30 focus:border-opacity-100 rounded-md"
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
}
