import type { Config } from "jest";
import { resolve } from "path";

const root = resolve(__dirname);

const config: Config = {
	rootDir: root,
	displayName: "unitary-tests",
	testMatch: ["<rootDir>/src/**/*.test.ts"],
	testEnvironment: "node",
	clearMocks: true,
	preset: "ts-jest",
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	moduleNameMapper: {
		"^@src/(.*)": "<rootDir>/src/$1",
		"^@test/(.*)": "<rootDir>/test/$1",
	},
	testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
	coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
	transform: { "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }] },
	moduleFileExtensions: ["ts"],
	verbose: true,
};

export default config;
