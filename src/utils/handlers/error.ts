import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { SimpleError } from "../errors";
import prismaErrorHandler from "./prisma-error";

async function errorHandler(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) {
  // Simple error
  if (error instanceof SimpleError) {
    return res.status(error.status).json({ detail: error.detail });
  }

  // Prisma error
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return prismaErrorHandler(req, res, error);
  }

  return res.status(500).json("Unhandled error.");
}

export default errorHandler;
