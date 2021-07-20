import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const { SECRET_KEY, DATABASE_URL } = process.env;
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

export { PORT, NODE_ENV, SECRET_KEY, DATABASE_URL };
