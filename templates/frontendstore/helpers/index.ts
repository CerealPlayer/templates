import { readFile } from "fs/promises";
import path from "path";
import { products } from "../types/props";

const basePath = process.cwd();

export async function retrieveData(): Promise<products> {
  const pathToData = path.resolve(basePath, "data", "products.json");
  const data = await readFile(pathToData);
  return JSON.parse(data.toString());
}
