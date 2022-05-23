import Link from "next/link";
import ActionButton from "../UI/ActionButton";

export default function GoToCheckout() {
  return (
    <div className="lg:col-span-6 border border-slate-300 px-4 py-8 max-h-52 flex flex-col gap-4 items-center">
      <Link href="/signin">
        <a className="max-w-xs w-full block">
          <ActionButton>Sign in to checkout</ActionButton>
        </a>
      </Link>
      <span>or</span>
      <Link href="/checkout">
        <a className="border-b border-slate-300 hover:border-slate-700 transition-all duration-200">Continue as a guest</a>
      </Link>
    </div>
  );
}
