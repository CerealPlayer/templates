import Link from "next/link";
import { ReactNode } from "react";
import Button from "../UI/btns/Button";
import Badge from "../UI/notifications/Badge";

export default function TinyNav({
  children,
  isLoggedIn,
}: {
  children: ReactNode;
  isLoggedIn: boolean;
}) {
  return (
    <div className="xl:hidden border-b-2 border-b-slate-300 lg:px-8 py-2 md:py-4 flex justify-between">
      {children}
      <nav className="hidden md:flex items-center">
        <Button>Trending</Button>
        <Button>On sale</Button>
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
