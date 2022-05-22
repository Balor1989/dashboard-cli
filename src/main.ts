import { App } from "./app";

async function boot() {
  const app = new App();

  await app.init();
}

boot();
