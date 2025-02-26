import { afterEach, beforeEach, describe } from "@jest/globals";

import { IStormGlass, IStormGlassForecastResponse, IStormGlassUsecase } from "./StormGlass.interfaces";
import { StormGlassUsecase } from "./StormGlass.usecase";

describe("StormGlass Usecase", () => {
	let Usecase: IStormGlassUsecase;
	let mock: Partial<IStormGlass> = {};

	beforeEach(() => {
		Usecase = new StormGlassUsecase();
		mock = { lat: -33.792726, lng: 151.289824 };
	});

	afterEach(() => {
		jest.clearAllMocks();
		jest.restoreAllMocks();
		jest.resetAllMocks();
	});

	describe("validation", () => {
		beforeEach(() => {
			jest.spyOn(Usecase, "fetchStormGlass" as any).mockReturnValue(Promise.resolve({}));
		});

		it("should throw if lat is undefined", async () => {
			mock.lat = undefined;
			const execute = Usecase.execute(mock as IStormGlass);
			await expect(execute).rejects.toThrow("lat is required");
		});

		it("should throw if lat is not a number", async () => {
			const lat = "invalid" as unknown as number;
			const execute = Usecase.execute({ ...mock, lat } as IStormGlass);
			await expect(execute).rejects.toThrow("lat must be a number");
		});

		it("should throw if lat is out of range #1", async () => {
			mock.lat = 110;
			const execute = Usecase.execute(mock as IStormGlass);
			await expect(execute).rejects.toThrow("lat must be between -90 and 90");
		});

		it("should throw if lat is out of range #2", async () => {
			mock.lat = -110;
			const execute = Usecase.execute(mock as IStormGlass);
			await expect(execute).rejects.toThrow("lat must be between -90 and 90");
		});

		it("should throw if lng is undefined", async () => {
			mock.lng = undefined;
			const execute = Usecase.execute(mock as IStormGlass);
			await expect(execute).rejects.toThrow("lng is required");
		});

		it("should throw if lng is not a number", async () => {
			const lng = "invalid" as unknown as number;
			const execute = Usecase.execute({ ...mock, lng } as IStormGlass);
			await expect(execute).rejects.toThrow("lng must be a number");
		});

		it("should throw if lng is out of range #1", async () => {
			mock.lng = 181;
			const execute = Usecase.execute(mock as IStormGlass);
			await expect(execute).rejects.toThrow("lng must be between -180 and 180");
		});

		it("should throw if lng is out of range #2", async () => {
			mock.lng = -192;
			const execute = Usecase.execute(mock as IStormGlass);
			await expect(execute).rejects.toThrow("lng must be between -180 and 180");
		});
	});

	describe("nomalize", () => {
		const mockResponse: IStormGlassForecastResponse = {
			hours: [
				{
					swellDirection: {
						noaa: 130.56,
					},
					swellHeight: {
						noaa: 0.18,
					},
					swellPeriod: {
						noaa: 6.73,
					},
					time: "2025-01-15T00:00:00+00:00",
					waveDirection: {
						noaa: 69.72,
					},
					waveHeight: {
						noaa: 1.03,
					},
					windDirection: {
						noaa: 36.15,
					},
					windSpeed: {
						noaa: 5.78,
					},
				},
				{
					swellDirection: {
						noaa: 134.32,
					},
					swellHeight: {
						noaa: 0.16,
					},
					swellPeriod: {
						noaa: 8.97,
					},
					time: "2025-01-15T01:00:00+00:00",
					waveDirection: {
						noaa: 70.43,
					},
					waveHeight: {
						noaa: 1.06,
					},
					windDirection: {
						noaa: 38.82,
					},
					windSpeed: {
						noaa: 6.84,
					},
				},
				{
					swellDirection: {
						noaa: 138.09,
					},
					swellHeight: {
						noaa: 0.14,
					},
					swellPeriod: {
						noaa: 11.2,
					},
					time: "2025-01-15T02:00:00+00:00",
					waveDirection: {
						noaa: 71.14,
					},
					waveHeight: {
						noaa: 1.1,
					},
					windDirection: {
						noaa: 41.5,
					},
					windSpeed: {
						noaa: 7.89,
					},
				},
			],
			meta: {
				cost: 1,
				dailyQuota: 10,
				end: "2025-01-25 00:00",
				lat: -33.792726,
				lng: 151.289824,
				params: ["swellDirection", "swellHeight", "swellPeriod", "waveDirection", "waveHeight", "windDirection", "windSpeed"],
				requestCount: 1,
				source: ["noaa"],
				start: "2025-01-15 00:00",
			},
		};
	});

	describe.skip("execute", () => {
		beforeEach(() => {
			jest.spyOn(Usecase, "validateParams" as any).mockReturnValue(undefined);
		});

		it.skip("should return the normalized forecast from the StormGlass API", async () => {
			const lat = -33.792726;
			const lng = 151.289824;

			// const stormGlassUsecase = new StormGlassUsecase();
			// const response = await stormGlassUsecase.execute({ lat, lng });

			// expect(response.lat).toBe(lat);
			// expect(response.lng).toBe(lng);
		});
	});
});
