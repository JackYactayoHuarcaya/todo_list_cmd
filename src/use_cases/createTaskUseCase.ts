import { TodoListRepository } from "../repositories/todoListRepository.js";

export class CreateTaskUseCase {
  constructor(private todoListRepository: TodoListRepository) {}

  execute(task: string): void {
    this.todoListRepository.createTask(task);
  }
}
