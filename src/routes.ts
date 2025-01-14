import express from "express";
import { ForecastRouter } from "./routes/forecast.routes";
import { IndexRouter } from "./routes/index.routes";

const appRouters = express();

appRouters.use("/", IndexRouter);
appRouters.use("/forecast", ForecastRouter);

export { appRouters };
