import "dotenv/config";
import "./util/module-alias";

import express, { Application } from "express";
import mongoose from "mongoose";
import { appRouters } from "./routes";

class App {
	private express: Application;
	private isProduction: boolean;
	private isReady: boolean;

	public constructor() {
		this.express = express();
		this.isProduction = process.env.NODE_ENV === "production";
		this.express.use("/assets", express.static(__dirname + "./public/assets"));
		this.express.use("/", express.static(__dirname + "./public"));
		this.express.use(express.json());

		this.isReady = false;
	}

	public async run() {
		if (this.isReady) throw new Error("App is already started");

		await this.database();
		this.routes();
		this.middlewares();

		this.isReady = true;

		return this;
	}

	public listen(port: number, callback?: () => void) {
		if (!this.isReady) throw new Error("App is not started yet");
		return this.express.listen(port, callback);
	}

	public getApp(): Application {
		return this.express;
	}

	private routes(): void {
		this.express.use(appRouters);
	}

	private middlewares(): void {
		if (this.isProduction) {
		}
	}

	private async database() {
		const URL = process.env.MONGODB_URI!;
		await mongoose
			.connect(URL, { dbName: process.env.MONGODB_DATABASE })
			.then(() => console.log(`MongoDB connected!`))
			.catch(() => console.log("Error to connect mongoDB"));
	}
}

export { App };
