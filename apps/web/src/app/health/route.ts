import type { HealthResponse } from "@zentrix/contracts";

export function GET(): Response {
  const body: HealthResponse = { status: "ok", service: "web", timestamp: new Date().toISOString() };
  return Response.json(body, { headers: { "cache-control": "no-store" } });
}
