import { App } from "./app";
import { LoggerService } from "./logger/logger.service";

async function boot() {
  const app = new App(new LoggerService());

  await app.init();
}

boot();
