import prisma from 'src/prisma/prisma-client';

class TodoService {
  public async getAllTodo() {
    const todos = await prisma.todo.findMany({});
    return todos;
  }
  public async getTodoById(id: number) {
    const todo = await prisma.todo.findMany({ where: { id: id } });
    return todo;
  }

  public async getTodosByUserId(userId: number) {
    const todo = await prisma.todo.findMany({ where: { user_id: userId } });
    return todo;
  }
}

export default new TodoService();
