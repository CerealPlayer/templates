import Link from "next/link";
import { ReactNode } from "react";
import Button from "../UI/Button";
import Badge from "../UI/notifications/Badge";

export default function Nav({ children }: { children: ReactNode }) {
  return (
    <div className="hidden border-b-2 border-b-slate-300 px-0 md:px-8 py-2 md:py-4 xl:grid grid-cols-3 justify-items-center">
      <nav className="flex items-center gap-8">
        <Button>Trending</Button>
        <Button>On sale</Button>
      </nav>
      {children}
      <nav className="flex items-center gap-8">
        <Badge>
          <Link href="/cart">
            <a>
              <Button>Cart</Button>
            </a>
          </Link>
        </Badge>
        <Link href="/signin">
          <a>
            <Button>Sign In</Button>
          </a>
        </Link>
      </nav>
    </div>
  );
}
