import { logger, app } from './app';
import env from '@config/env';

const server = app.listen(env.PORT, () => {
  logger.info(`Server is running on ${env.HOST}:${env.PORT}`);
});

const onClose = (signal: string) => {
  logger.info(`Signal (${signal}) received`);
  server.close(() => {
    logger.info(`Server (${env.HOST}:${env.PORT}) closed`);
    process.exit();
  });
};

process.on('SIGINT', onClose);
process.on('SIGTERM', onClose);
