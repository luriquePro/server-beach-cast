export interface Usecase {
	execute(): Promise<object>;
}
