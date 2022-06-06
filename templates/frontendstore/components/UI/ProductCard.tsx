import Link from "next/link";
import Image from "next/image";

type props = {
  href: string;
  src: string;
  title: string;
  desc: string;
};

export default function ProductCard({ href, src, title, desc }: props) {
  return (
    <Link href={href}>
      <a className="border-2 max-w-max border-slate-300 rounded-xl overflow-hidden group">
        <div className="p-2">
          <Image src={src} alt={title} width={300} height={290} />
        </div>
        <div className="p-2 bg-slate-500 bg-opacity-90 -mt-16 relative z-10 translate-y-full group-hover:translate-y-0 transition-all duration-200 ease-out">
          <h2 className="text-neutral-100">{title}</h2>
          <p className="text-sm text-neutral-200 font-light">{desc}</p>
        </div>
      </a>
    </Link>
  );
}
