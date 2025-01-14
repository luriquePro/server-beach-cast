import type { Config } from "jest";
import { resolve } from "path";
import rootConfig from "../jest.config";

const root = resolve(__dirname, "../");

const config: Config = {
	...rootConfig,
	rootDir: root,
	displayName: "end2end-tests",
	testMatch: ["<rootDir>/test/**/*.test.ts"],
	setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
};

export default config;
