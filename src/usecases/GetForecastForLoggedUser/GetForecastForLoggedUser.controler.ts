import { Usecase } from "@src/@types/main";
import { Request, Response } from "express";

class GetForecastForLoggedUserController {
	constructor(private readonly ForecastUsecase: Usecase) {}

	public async handle(_: Request, res: Response): Promise<void> {
		const result = await this.ForecastUsecase.execute();
		res.status(200).json(result);
		return;
	}
}

export { GetForecastForLoggedUserController };
