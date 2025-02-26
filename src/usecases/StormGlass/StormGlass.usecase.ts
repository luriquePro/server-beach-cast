import axios from "axios";
import moment from "moment";
import {
	IStormGlass,
	IStormGlassDatePerHour,
	IStormGlassDatetime,
	IStormGlassForecastResponse,
	IStormGlassRequestsDetails,
	IStormGlassReturn,
	IStormGlassUsecase,
} from "./StormGlass.interfaces";

class StormGlassUsecase implements IStormGlassUsecase {
	async execute({ lat, lng }: IStormGlass): Promise<IStormGlassReturn> {
		this.validateParams({ lat, lng });
		const response = await this.fetchStormGlass({ lat, lng });
		return this.normalizeResponse(response);
	}

	private validateParams({ lat, lng }: IStormGlass): void {
		if (!lat) throw new Error("lat is required");
		if (!lng) throw new Error("lng is required");

		if (typeof lat !== "number") throw new Error("lat must be a number");
		if (typeof lng !== "number") throw new Error("lng must be a number");

		if (lat > 90 || lat < -90) throw new Error("lat must be between -90 and 90");
		if (lng > 180 || lng < -180) throw new Error("lng must be between -180 and 180");
	}

	private async fetchStormGlass({ lat, lng }: IStormGlass): Promise<IStormGlassForecastResponse> {
		const url = "https://api.stormglass.io/v2/weather/point";
		const response = await axios
			.get<IStormGlassForecastResponse>(url, {
				headers: { Authorization: process.env.TOKEN },
				params: {
					lat,
					lng,
					params: "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed",
					source: "noaa",
				},
			})
			.then(response => response.data)
			.catch(() => {
				throw new Error("request limit reached");
			});

		return response;
	}

	private normalizeResponse({ hours, meta }: IStormGlassForecastResponse): IStormGlassReturn {
		const requestDetails: IStormGlassRequestsDetails = {
			used_requests: meta.requestCount,
			ramaining_requests: meta.dailyQuota - meta.requestCount,
			cost: meta.cost,
		};

		const datetime: IStormGlassDatetime = {
			start: moment(meta.start, "YYYY-MM-DD HH:mm").utc().toDate(),
			end: moment(meta.end, "YYYY-MM-DD HH:mm").utc().toDate(),
		};

		const coordinates: IStormGlass = { lat: meta.lat, lng: meta.lng };

		const dataPerHour: IStormGlassDatePerHour[] = hours.map(hour => ({
			time: moment(hour.time).utc().toDate(),
			details: {
				swell_direction: hour.swellDirection.noaa,
				swell_height: hour.swellHeight.noaa,
				swell_period: hour.swellPeriod.noaa,
				wave_direction: hour.waveDirection.noaa,
				wave_height: hour.waveHeight.noaa,
				wind_direction: hour.windDirection.noaa,
				wind_speed: hour.windSpeed.noaa,
			},
		}));

		const result: IStormGlassReturn = {
			requests_details: requestDetails,
			data_per_hour: dataPerHour,
			datetime,
			coordinates,
		};

		return result;
	}
}

export { StormGlassUsecase };
