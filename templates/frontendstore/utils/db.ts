import { PSQL } from "psql-js";
const connectionString = process.env.POSTGRES_CONNECTION_URI;

export const psql = new PSQL(connectionString!);