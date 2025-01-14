import { GetForecastForLoggedUserUsecase } from "./GetForecastForLoggedUser.usecase";

describe("GetForecastForLoggedUser", () => {
	it("should return a message", async () => {
		const forecastUsecase = new GetForecastForLoggedUserUsecase();
		const result = await forecastUsecase.execute();
		expect(result.message).toBe("Hello World!");
	});
});
