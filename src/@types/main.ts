export interface Usecase<T> {
	execute(): Promise<T>;
}
