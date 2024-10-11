import { Router } from 'express';
import TodoController from '@controller/todo.controller';

const route = Router();

export default (app: Router) => {
  const route = Router();
  app.use('/todos', route);
  route.get('/', TodoController.getAllTodo);
  route.get('/:id', TodoController.getTodoById);
  route.get('/user/:userId', TodoController.getTodosByUserId);
};
