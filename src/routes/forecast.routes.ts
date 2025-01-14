import { GetForecastForLoggedUserController } from "@src/usecases/GetForecastForLoggedUser/GetForecastForLoggedUser.controler";
import { GetForecastForLoggedUserService } from "@src/usecases/GetForecastForLoggedUser/GetForecastForLoggedUser.service";
import { Router } from "express";

const ForecastRouter = Router();

const getForecastForLoggedUserService = new GetForecastForLoggedUserService();
const getForecastForLoggedUserController = new GetForecastForLoggedUserController(getForecastForLoggedUserService);

ForecastRouter.get("/", getForecastForLoggedUserController.handle.bind(getForecastForLoggedUserController));

export { ForecastRouter };
