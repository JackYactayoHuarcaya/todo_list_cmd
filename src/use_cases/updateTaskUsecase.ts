import { TodoListRepository } from "../repositories/todoListRepository.js";

export class UpdateTaskUseCase {
  constructor(private todoListRepository: TodoListRepository) {}
  execute(positionTask: number, task: string): void {
    this.todoListRepository.updateTask(positionTask, task);
  }
}
