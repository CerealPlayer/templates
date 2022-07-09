import Section from "../UI/containers/Section";

export default function CartContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-8 md:flex-row">{children}</div>
    </Section>
  );
}
