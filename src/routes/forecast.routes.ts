import { GetForecastForLoggedUserController } from "@src/usecases/GetForecastForLoggedUser/GetForecastForLoggedUser.controller";
import { GetForecastForLoggedUserUsecase } from "@src/usecases/GetForecastForLoggedUser/GetForecastForLoggedUser.usecase";
import { Router } from "express";

const ForecastRouter = Router();

const getForecastForLoggedUserUsecase = new GetForecastForLoggedUserUsecase();
const getForecastForLoggedUserController = new GetForecastForLoggedUserController(getForecastForLoggedUserUsecase);

ForecastRouter.get("/", getForecastForLoggedUserController.handle.bind(getForecastForLoggedUserController));

export { ForecastRouter };
