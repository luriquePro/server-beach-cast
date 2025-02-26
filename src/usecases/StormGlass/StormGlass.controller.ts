import { Request, Response } from "express";
import { IStormGlass, IStormGlassUsecase } from "./StormGlass.interfaces";

class StormGlassController {
	constructor(private readonly StormGlassUsecase: IStormGlassUsecase) {}

	public async handle(req: Request, res: Response): Promise<void> {
		const stormGlassData: IStormGlass = {
			lat: Number(req.params.lat),
			lng: Number(req.params.lng),
		};

		const result = await this.StormGlassUsecase.execute(stormGlassData);
		res.status(200).json(result);
		return;
	}
}

export { StormGlassController };
