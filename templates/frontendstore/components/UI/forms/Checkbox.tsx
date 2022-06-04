import { FieldHookConfig, useField } from "formik";
import { ReactNode } from "react";

export default function Checkbox({
  children,
  ...props
}: FieldHookConfig<string>) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  console.log(meta);
  return (
    <div>
      <label className="text-sm tracking-tight flex items-center gap-4">
        <input type="checkbox" {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
}
