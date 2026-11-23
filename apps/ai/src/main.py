from datetime import datetime, timezone

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="ZENTRIX Hotels AI Service",
    version="0.1.0",
    docs_url="/docs",
    redoc_url=None,
)


class HealthResponse(BaseModel):
    status: str
    service: str
    timestamp: datetime


@app.get("/health", response_model=HealthResponse, tags=["health"])
async def health() -> HealthResponse:
    return HealthResponse(
        status="ok", service="ai", timestamp=datetime.now(timezone.utc)
    )
