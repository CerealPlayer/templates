export type products = {
  id: number;
  name: string;
  short_desc: string;
  src: string;
  href: string;
}[];

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
