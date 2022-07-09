import Link from "next/link";
import { ReactNode } from "react";
import Button from "../UI/btns/Button";
import Badge from "../UI/notifications/Badge";

export default function Nav({
  children,
  isLoggedIn,
}: {
  children: ReactNode;
  isLoggedIn: boolean;
}) {
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
        {!isLoggedIn && (
          <Link href="/login">
            <a>
              <Button>Log in</Button>
            </a>
          </Link>
        )}
        {isLoggedIn && (
          <Link href="/account">
            <a>
              <Button>My account</Button>
            </a>
          </Link>
        )}
      </nav>
    </div>
  );
}
