import express from "express";
import { IndexRouter } from "./routes/index.routes";

const appRouters = express();

appRouters.use("/", IndexRouter);

export { appRouters };
