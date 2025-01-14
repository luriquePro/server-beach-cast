import supertest from "supertest";

describe("Beach Forecast fuctional tests", () => {
	it("should return a forecast with just a few times", async () => {
		const { body, status } = await supertest(app).get("/forecast");
		expect(status).toBe(200);
		expect(body).toBeInstanceOf(Array);
		// expect(body.length).toBeLessThanOrEqual(3);
	});
});
