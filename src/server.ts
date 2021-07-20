import http from "http";
import { PrismaClient } from "@prisma/client";
import "express-async-errors";
import app from "./app";
import { secrets } from "./utils";

// Create the server
const server = http.createServer(app);

// Prisma client
const prisma = new PrismaClient();

// Start listening
server.listen(secrets.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`💻 App listening on port ${secrets.PORT}`);
});

export default server;
export { prisma };
