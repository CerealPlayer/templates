import { FieldHookConfig, useField } from "formik";

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
        className="py-1 px-4 focus:border-slate-400 border-2 border-gris-700 outline-none bg-slate-50 border-opacity-30 focus:border-opacity-100 rounded-md"
        type={props.type}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600 my-1">
          {meta.error.charAt(0).toUpperCase() + meta.error.slice(1)}
        </div>
      ) : null}
    </div>
  );
}
