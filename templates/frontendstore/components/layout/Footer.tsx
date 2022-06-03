import Button from "../UI/Button";

export default function Footer() {
  return (
    <footer className="bg-slate-800 relative">
      <div className="w-11/12 max-w-4xl flex flex-col gap-8 md:flex-row md:justify-between py-8 mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-slate-100">Front-end Store</h1>
          <p className="text-slate-300">This website is a demo</p>
        </div>
        <ul className="text-slate-300 flex flex-col gap-2 items-center">
          <li>
            <a
              href="https://www.jmoa.dev"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
            >
              <Button>JMOA</Button>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CerealPlayer/templates/tree/main/templates/frontendstore"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
            >
              <Button>See repo</Button>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/iamjmoa"
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
            >
              <Button>Twitter</Button>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
