export interface IStormGlass {
	lat: number;
	lng: number;
}

export interface IStormGlassUsecase {
	execute({ lat, lng }: IStormGlass): Promise<IStormGlassReturn>;
}

export interface IStormGlassForecastResponse {
	hours: IStormGlassForecastResponseHours[];
	meta: IStormGlassForecastResponseMeta;
}

export interface IStormGlassForecastResponseHours {
	swellDirection: IStormGlassForecastResponseDefault;
	swellHeight: IStormGlassForecastResponseDefault;
	swellPeriod: IStormGlassForecastResponseDefault;
	waveDirection: IStormGlassForecastResponseDefault;
	waveHeight: IStormGlassForecastResponseDefault;
	windDirection: IStormGlassForecastResponseDefault;
	windSpeed: IStormGlassForecastResponseDefault;
	time: string;
}

export interface IStormGlassForecastResponseDefault {
	noaa: number;
}

export interface IStormGlassForecastResponseMeta {
	cost: number;
	dailyQuota: number;
	end: string;
	lat: number;
	lng: number;
	params: IStormGlassForecastResponseMetaParams[];
	requestCount: number;
	source: IStormGlassForecastResponseMetaSource[];
	start: string;
}

type IStormGlassForecastResponseMetaParams =
	| "swellDirection"
	| "swellHeight"
	| "swellPeriod"
	| "waveDirection"
	| "waveHeight"
	| "windDirection"
	| "windSpeed";

type IStormGlassForecastResponseMetaSource = "noaa";

export interface IStormGlassReturn {
	requests_details: IStormGlassRequestsDetails;
	datetime: IStormGlassDatetime;
	coordinates: IStormGlass;
	data_per_hour: IStormGlassDatePerHour[];
}

export interface IStormGlassRequestsDetails {
	used_requests: number;
	ramaining_requests: number;
	cost: number;
}

export interface IStormGlassDatetime {
	start: Date;
	end: Date;
}

export interface IStormGlassDatePerHour {
	time: Date;
	details: IStormGlassDatePerHourDetails;
}

export interface IStormGlassDatePerHourDetails {
	swell_direction: number;
	swell_height: number;
	swell_period: number;
	wave_direction: number;
	wave_height: number;
	wind_direction: number;
	wind_speed: number;
}
