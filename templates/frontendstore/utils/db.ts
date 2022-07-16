import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  const result = await prisma.products.findMany();
  const products = result.map(item => ({ ...item, price: item.price.toNumber() }));
  await prisma.$disconnect();
  return products;
}