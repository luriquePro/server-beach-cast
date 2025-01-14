import { Request, Response } from "express";
import { IForecastUsecase } from "./GetForecastForLoggedUser.interfaces";

class GetForecastForLoggedUserController {
	constructor(private readonly ForecastUsecase: IForecastUsecase) {}

	public async handle(_: Request, res: Response): Promise<void> {
		const result = await this.ForecastUsecase.execute();
		res.status(200).json(result);
		return;
	}
}

export { GetForecastForLoggedUserController };
