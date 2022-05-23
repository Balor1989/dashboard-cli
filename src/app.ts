import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  userConrtoller: UserController;

  constructor(logger: LoggerService, userController: UserController) {
    this.app = express();
    this.port = 4000;
    this.logger = logger;
    this.userConrtoller = userController;
  }

  useRoutes() {
    this.app.use("/users", this.userConrtoller.router);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на ${this.port}`);
  }
}
