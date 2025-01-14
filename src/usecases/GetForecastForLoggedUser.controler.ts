import { Request, Response } from "express";

class GetForecastForLoggedUser {
	constructor() {}

	public async handle(req: Request, res: Response) {
		return res.status(200).json({});
	}
}

export { GetForecastForLoggedUser };
