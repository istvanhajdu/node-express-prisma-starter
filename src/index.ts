// src/index.js
import express, { Express, Request, Response } from "express";
import env from "@config/env";

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(env.PORT, () => {
  console.log(`Server is running at http://localhost:${env.PORT}`);
});
