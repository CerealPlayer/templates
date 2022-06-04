import Link from "next/link";
import { ReactNode } from "react";
import Button from "../UI/Button";
import Badge from "../UI/notifications/Badge";
import MobileMenu from "./mobile-menu/MobileMenu";

export default function TinyNav({ children }: { children: ReactNode }) {
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
        <Link href="/signup">
          <a>
            <Button>Sign In</Button>
          </a>
        </Link>
      </nav>
      <MobileMenu />
    </div>
  );
}
