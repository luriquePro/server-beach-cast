import { App } from "@src/app";

import supertest from "supertest";

beforeAll(async () => {
	const application = new App();
	await application.run();

	global.testRequest = supertest(application.getApp()) as any;
});
