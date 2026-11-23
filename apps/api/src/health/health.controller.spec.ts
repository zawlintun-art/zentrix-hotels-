import { HealthController } from "./health.controller.js";

describe("HealthController", () => {
  it("returns an API liveness response", () => {
    const result = new HealthController().check();
    expect(result.status).toBe("ok");
    expect(result.service).toBe("api");
    expect(Number.isNaN(Date.parse(result.timestamp))).toBe(false);
  });
});
