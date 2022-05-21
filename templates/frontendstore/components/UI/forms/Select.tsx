import { useField, FieldHookConfig } from "formik";

type labeled = {
  label: string;
};

export default function Select({
  label,
  ...props
}: FieldHookConfig<string> & labeled) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col justify-start w-full">
      <label
        className="text-base text-gris-600"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select
        className="py-1 px-4 border-2 border-gris-700 bg-slate-50 outline-none border-opacity-30 focus:border-opacity-100 rounded-md"
        {...field}
      >
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
}
