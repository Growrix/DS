import "@testing-library/jest-dom";

// Default 5s timeout is too tight for slower hosts (CI, Windows). Phase 12H
// bumps to 15s globally — individual tests can still override.
jest.setTimeout(15_000);
