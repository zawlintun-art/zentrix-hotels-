"""Dependency-free structural checks for the initial workspace foundation."""

import json
import ast
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FILES = (
    "pnpm-workspace.yaml",
    "apps/web/src/app/page.tsx",
    "apps/web/src/app/health/route.ts",
    "apps/api/src/health/health.controller.ts",
    "apps/api/prisma/schema.prisma",
    "apps/api/prisma/migrations/20261123000000_initial_catalog/migration.sql",
    "apps/ai/src/main.py",
    "infrastructure/docker/compose.yaml",
    "docs/architecture.md",
)


def main() -> None:
    for relative in REQUIRED_FILES:
        assert (ROOT / relative).is_file(), f"Missing required file: {relative}"
    for relative in ("package.json", "apps/web/package.json", "apps/api/package.json", "apps/ai/package.json"):
        with (ROOT / relative).open(encoding="utf-8") as manifest:
            json.load(manifest)
    for relative in ("apps/ai/src/main.py", "apps/ai/tests/test_health.py"):
        ast.parse((ROOT / relative).read_text(encoding="utf-8"), filename=relative)
    schema = (ROOT / "apps/api/prisma/schema.prisma").read_text(encoding="utf-8")
    assert 'provider = "mysql"' in schema
    assert "model Tenant" in schema and "model Hotel" in schema
    sql = (ROOT / "apps/api/prisma/migrations/20261123000000_initial_catalog/migration.sql").read_text(encoding="utf-8")
    assert "CREATE TABLE `tenants`" in sql and "CREATE TABLE `hotels`" in sql
    print("Foundation structure and JSON manifests are valid.")


if __name__ == "__main__":
    main()
