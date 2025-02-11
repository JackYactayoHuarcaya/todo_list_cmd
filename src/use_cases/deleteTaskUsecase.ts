import { TodoListRepository } from "../repositories/todoListRepository.js";

export class DeleteTaskUseCase {
  constructor(private todoListRepository: TodoListRepository) {}
  execute(positionTask: number): void {
    this.todoListRepository.deleteTask(positionTask);
  }
}
