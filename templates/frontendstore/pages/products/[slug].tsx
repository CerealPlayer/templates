import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  return <h1 className="text-center">{router.query.slug}</h1>;
}
