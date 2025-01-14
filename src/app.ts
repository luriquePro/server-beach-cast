import "dotenv/config";
import express, { Application } from "express";
import mongoose from "mongoose";
import { appRouters } from "./routes";

class App {
	public express: Application;
	public isProduction: boolean;

	public constructor() {
		this.express = express();
		this.isProduction = process.env.NODE_ENV === "production";
		this.express.use("/assets", express.static(__dirname + "./public/assets"));
		this.express.use("/", express.static(__dirname + "./public"));
	}

	public async run(): Promise<void> {
		await this.database();
		this.routes();
		this.middlewares();
		this.express.use(express.json());
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
		mongoose
			.connect(URL, { dbName: process.env.MONGODB_DATABASE })
			.then(() => console.log(`MongoDB connected!`))
			.catch(() => console.log("Error to connect mongoDB"));
	}
}

export { App };
