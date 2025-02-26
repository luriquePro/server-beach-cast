import { StormGlassController } from "@src/usecases/StormGlass/StormGlass.controller";
import { StormGlassUsecase } from "@src/usecases/StormGlass/StormGlass.usecase";
import { Router } from "express";

const StomGlassRouter = Router();

const stomGlasService = new StormGlassUsecase();
const stormGlassController = new StormGlassController(stomGlasService);

StomGlassRouter.get("/:lat/:lng", stormGlassController.handle.bind(stormGlassController));

export { StomGlassRouter };
