export type products = {
  id: number;
  name: string;
  short_desc: string;
  src: string;
  href: string;
  price: number;
}[];

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
