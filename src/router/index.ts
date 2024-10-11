import { Router } from 'express';
import TodoRouter from '@router/todo.router';

export default () => {
  const app = Router();
  TodoRouter(app);
  return app;
};
