import '@/config/env';
import cors from 'cors';
import express, { type Express } from 'express';

import { Bot } from '@/bot';
import { healthRoutes } from '@/routes/health';
import { logger } from '@/utils';

class App {
  private bot: Bot;
  private server: Express;
  private port: number;

  constructor() {
    this.bot = new Bot();
    this.server = express();
    this.port = Number(process.env.PORT) || 3000;
  }

  private setupCors(): void {
    this.server.use(
      cors({
        origin: process.env.CORS_ORIGIN || `http://localhost:${this.port}`,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      }),
    );
  }

  private setupMiddlewares(): void {
    this.server.use(express.json({ limit: '10mb' }));
    this.server.use(express.urlencoded({ limit: '10mb', extended: true }));
  }

  private setupRoutes(): void {
    this.server.use('/health', healthRoutes);
  }

  async start(): Promise<void> {
    this.setupCors();
    this.setupMiddlewares();
    this.setupRoutes();

    this.server.listen(this.port, async () => {
      logger('SUCCESS', 'SERVER', `Server is running on port: ${this.port}`);

      await this.bot.start();
    });
  }
}

new App().start();
