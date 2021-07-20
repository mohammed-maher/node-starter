import express, { Application } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import swaggerUi from "swagger-ui-express";
import routers from "./routers";
import { secrets, handlers } from "./utils";
import { JWTStrategy, JWTStrictStrategy } from "./utils/passport";
import specs from "../openapi.json";

// Initialize the application
const app: Application = express();

// Security headers
app.use(helmet());

// Compress requests
app.use(compression());

// Parse incoming requests with JSON payload
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse incoming requests cookies
app.use(cookieParser(secrets.SECRET_KEY));

// Logging
const format = secrets.NODE_ENV === "development" ? "dev" : "tiny";
app.use(morgan(format));

// Authentication
app.use(passport.initialize());
passport.use("jwt", JWTStrategy);
passport.use("jwt-strict", JWTStrictStrategy);

// OpenAPI docs
if (secrets.NODE_ENV === "development") {
  app.use("/docs", swaggerUi.serve);
  app.get("/docs", swaggerUi.setup(specs));
}

// Routers
app.use(routers);

// Error handler
app.use(handlers.error);

export default app;
