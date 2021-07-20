import request from "supertest";
import app from "../src/app";
import server, { prisma } from "../src/server";

describe("Test / route", () => {
  beforeAll(async () => {});

  beforeEach(async () => {});

  afterEach(async () => {});

  afterAll(async () => {
    server.close();
    await prisma.$disconnect();
  });

  test("Get request should returns 200 status code", async () => {
    // * Test the homepage
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
