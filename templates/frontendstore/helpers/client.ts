export function calcPrice(items: { price: number, qt: number }[]) {
  return items.reduce((acc, curr) => acc + (curr.price * curr.qt), 0)
}