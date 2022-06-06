import { useSession } from "next-auth/react";
import Link from "next/link";
import ActionButton from "../UI/ActionButton";

export default function GoToCheckout() {
  const { status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="lg:col-span-4 border border-slate-300 rounded-xl px-4 py-8 max-h-28 flex flex-col gap-4 items-center">
        <Link href="/checkout">
          <a className="max-w-xs w-full block">
            <ActionButton primary>Go to checkout</ActionButton>
          </a>
        </Link>
      </div>
    );
  }
  return (
    <div className="lg:col-span-4 border border-slate-300 rounded-xl px-4 py-8 max-h-52 flex flex-col gap-4 items-center">
      <Link href="/login?ref=cart">
        <a className="max-w-xs w-full block">
          <ActionButton>Log in to checkout</ActionButton>
        </a>
      </Link>
      <span>or</span>
      <Link href="/checkout">
        <a className="border-b border-slate-300 hover:border-slate-700 transition-all duration-200">
          Continue as a guest
        </a>
      </Link>
    </div>
  );
}
