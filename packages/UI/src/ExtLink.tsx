export function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border-b border-rose-500 hover:border-b-4 transition-all duration-200 ease-out"
    >
      {children}
    </a>
  );
}
