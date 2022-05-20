import Button from "../UI/Button";

export default function Footer() {
  return (
    <footer className="bg-slate-800 relative">
      <div className="w-11/12 max-w-4xl flex flex-col gap-8 md:flex-row md:justify-between py-8 mx-auto">
        <div className="text-slate-200 text-center md:text-left">
          <h1>Front-end Store</h1>
          <p>This website is a demo</p>
        </div>
        <ul className="text-slate-300 flex flex-col gap-2 items-center">
          <li>
            <a href="https://www.jmoa.dev">
              <Button>JMOA</Button>
            </a>
          </li>
          <li>
          <a href="">
              <Button>See repo</Button>
            </a>
          </li>
          <li>
          <a href="">
              <Button>Twitter</Button>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
