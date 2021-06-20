// jest.config.ts
import type { Config } from "@jest/types";

// Sync object
export const config: Config.InitialOptions = {
    verbose: true,
    roots: ["<rootDir>/src"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};
