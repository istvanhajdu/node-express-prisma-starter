import type { Request, Response } from 'express';
import TodoService from '@service/todo.service';

class TodoController {
  public getAllTodo = async (_req: Request, res: Response) => {
    const todos = await TodoService.getAllTodo();

    res.json(todos);
  };

  public getTodoById = async (req: Request, _res: Response) => {
    const id = req.body.id;
    const todo = TodoService.getTodoById(id);

    return todo;
  };

  public getTodosByUserId = async (req: Request, _res: Response) => {
    const userId = req.body.userId;
    const todos = TodoService.getTodosByUserId(userId);

    return todos;
  };
}

export default new TodoController();
