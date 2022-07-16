import CartContainer from "../components/cart/CartContainer";
import DisplayItem from "../components/cart/DisplayItem";
import GoToCheckout from "../components/cart/GoToCheckout";
import { useCart } from "../hooks/useCart";
import { products } from "../types/props";
import { getAllProducts } from "../utils/db";

export default function Cart({ products }: { products: products }) {
  const { items, addItem, deleteItem } = useCart();
  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-body">
        <h1>Currently you have no items in your cart</h1>
      </div>
    );
  }
  const productsInCart = items
    .filter((item) => item.id)
    .map((item) => {
      const product = products.find((product) => product.id === item.id);
      if (product) {
        return { ...product, qt: item.qt };
      } else return null;
    });
  if (!productsInCart.some((item) => item !== null)) {
    return (
      <div className="flex justify-center items-center min-h-body">
        <h1>There was a problem rendering your cart</h1>
      </div>
    );
  }
  return (
    <CartContainer>
      <div className="rounded-xl lg:col-span-8 border-slate-300 px-4 py-2 flex flex-col gap-4">
        {productsInCart.map((item) => (
          <DisplayItem
            key={item!.id}
            onDeleteItem={deleteItem}
            {...item!}
            addItem={addItem}
          />
        ))}
      </div>
      <GoToCheckout />
    </CartContainer>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}
