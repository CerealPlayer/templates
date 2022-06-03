import Link from "next/link";
import MobileNav from "./TinyNav";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-11/12 max-w-7xl mx-auto">
      <Nav>
        <Link href="/">
          <a>
            <h1>Front-end Store</h1>
          </a>
        </Link>
      </Nav>
      <MobileNav>
        <Link href="/">
          <a>
            <h1>Front-end Store</h1>
          </a>
        </Link>
      </MobileNav>
    </header>
  );
}
