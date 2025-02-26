import express from "express";
import { ForecastRouter } from "./routes/forecast.routes";
import { IndexRouter } from "./routes/index.routes";
import { StomGlassRouter } from "./routes/stormGlass.routes";

const appRouters = express();

appRouters.use("/", IndexRouter);
appRouters.use("/forecast", ForecastRouter);
appRouters.use("/storm-glass", StomGlassRouter);

export { appRouters };
