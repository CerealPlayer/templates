export default function ErrorMsg({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-red-500 font-bold text-center">{children}</span>
  );
}
