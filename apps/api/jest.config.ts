import type { Config } from "jest";
const config: Config = { moduleFileExtensions: ["js", "json", "ts"], extensionsToTreatAsEsm: [".ts"], rootDir: ".", testRegex: ".*\\.spec\\.ts$", moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" }, transform: { "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.json", useESM: true }] }, collectCoverageFrom: ["src/**/*.ts"], testEnvironment: "node" };
export default config;
