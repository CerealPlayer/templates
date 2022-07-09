import { Client } from "pg";
const connectionString = process.env.POSTGRES_CONNECTION_URI;

export const client = new Client({
  connectionString
});
