import { Pool } from "pg";
const connectionString = process.env.POSTGRES_CONNECTION_URI;

export const pool = new Pool({
  connectionString
});
