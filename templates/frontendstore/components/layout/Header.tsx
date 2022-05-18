import Button from "../UI/Button";

export default function Header() {
  return (
    <header className="w-11/12 max-w-7xl mx-auto">
      <div className="border-b-2 border-b-slate-300 px-0 md:px-8 py-2 md:py-4 flex justify-between items-center">
        <h1>Front-end Store</h1>
        <nav>
          <Button>Cart</Button>
        </nav>
      </div>
    </header>
  );
}
