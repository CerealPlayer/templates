import { ArrayElement, cartContent, products } from "../types/props";

export function calcPrice(items: { price: number; qt: number }[]) {
  return items.reduce((acc, curr) => acc + curr.price * curr.qt, 0);
}

type cartInfoCalcProps = {
  items: { qt: number; id: number }[];
  products: products;
};

export function getCartInfo({ items, products }: cartInfoCalcProps) {
  return items
    .filter((item) => item.id)
    .map((item) => {
      if (!item) return null;
      const product = products.find((product) => product.id === item.id);
      if (product) {
        return { ...product, qt: item.qt };
      } else return null;
    }) as cartContent;
}
