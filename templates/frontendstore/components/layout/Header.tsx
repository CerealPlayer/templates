import Link from "next/link";
import MobileNav from "./mobile-menu/MobileNav";
import Nav from "./Nav";
import { useSession } from "next-auth/react";
import MobileMenu from "./mobile-menu/MobileMenu";
import TinyNav from "./TinyNav";

export default function Header() {
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";
  return (
    <header className="w-11/12 max-w-7xl mx-auto">
      <Nav isLoggedIn={isLoggedIn}>
        <Link href="/">
          <a>
            <h1>Front-end Store</h1>
          </a>
        </Link>
      </Nav>
      <TinyNav isLoggedIn={isLoggedIn}>
        <Link href="/">
          <a>
            <h1>Front-end Store</h1>
          </a>
        </Link>
        <MobileMenu>
          <MobileNav isLoggedIn={isLoggedIn} />
        </MobileMenu>
      </TinyNav>
    </header>
  );
}
