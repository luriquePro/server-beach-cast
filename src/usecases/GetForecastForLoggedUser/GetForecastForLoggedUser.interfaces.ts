export interface IForecastUsecase {
	execute: () => Promise<{ message: string }>;
}
