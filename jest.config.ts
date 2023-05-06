import type { Config } from "@jest/types"
import nextJest from "next/jest"

const createJestConfig = nextJest({ dir: "./" })

const config: Config.InitialOptions = {
  errorOnDeprecated: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^test-utils$": "<rootDir>/src/testUtils/test-utils.tsx",
    "^render-hook-utils$": "<rootDir>/src/testUtils/render-hook-utils.tsx",
  },
  setupFiles: ["./jest.setup.tsx"],
  setupFilesAfterEnv: ["./jest.setupAfterEnv.ts"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,
  resetModules: true,
  testTimeout: 10000,
  roots: ["./src"],
}

export default createJestConfig(config)
