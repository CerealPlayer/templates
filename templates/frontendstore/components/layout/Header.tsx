import Link from "next/link";
import Button from "../UI/Button";
import Badge from "../UI/notifications/Badge";

export default function Header() {
  return (
    <header className="w-11/12 max-w-7xl mx-auto">
      <div className="border-b-2 border-b-slate-300 px-0 md:px-8 py-2 md:py-4 grid xl:grid-cols-3 justify-items-center">
        <nav className="hidden xl:flex items-center gap-8">
          <Button>Trending</Button>
          <Button>On sale</Button>
        </nav>
        <Link href="/">
          <a>
            <h1>Front-end Store</h1>
          </a>
        </Link>
        <nav className="hidden xl:flex items-center gap-8">
          <Button>Wishlist</Button>
          <Badge>
            <Link href="/cart">
              <a>
                <Button>Cart</Button>
              </a>
            </Link>
          </Badge>
        </nav>
      </div>
    </header>
  );
}
