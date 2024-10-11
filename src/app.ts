import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import pino from 'pino';
import env from '@config/env';
import { rateLimit } from 'express-rate-limit';

import router from '@router/index';

const logger = pino({ name: 'server start' });

const app: Application = express();

const rateLimiter = rateLimit({
  legacyHeaders: true,
  limit: env.RATE_LIMIT,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  windowMs: 60 * 1000 * env.RATE_WINDOW_MS,
});

const corsOptions = cors({
  credentials: true,
  origin: '*',
});

app.use(corsOptions);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

app.use('/api', router());

export { app, logger };
