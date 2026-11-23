import "reflect-metadata";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";
import { AppModule } from "./app.module.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ["error", "warn", "log"] });
  app.use(helmet());
  app.setGlobalPrefix("api/v1");
  app.enableShutdownHooks();
  const allowedOrigins = process.env.WEB_ORIGIN?.split(",").map((origin) => origin.trim()).filter(Boolean);
  app.enableCors({ origin: allowedOrigins?.length ? allowedOrigins : false, credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  await app.listen(Number(process.env.API_PORT ?? 4000), "0.0.0.0");
}
void bootstrap();
