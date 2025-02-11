import { TodoListRepository } from "../repositories/todoListRepository.js";
import { Tasks } from "../entities/Tasks.js";

export class ReadTaskUseCase {
  constructor(private todoListRepository: TodoListRepository) {}
  execute(): Tasks[] {
    return this.todoListRepository.readTasks();
  }
}
