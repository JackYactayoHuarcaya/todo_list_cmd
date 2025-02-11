import { Tasks } from "../entities/Tasks.js";
import { TodoListRepository } from "../repositories/todoListRepository.js";
export class TaskServiceRepository implements TodoListRepository {
  tasks: Tasks[] = [];

  createTask(task: string): void {
    this.tasks.push(new Tasks(task, new Date().toISOString()));
  }
  deleteTask(positionTask: number): void {
    this.tasks.splice(positionTask, 1);
  }
  readTasks(): Tasks[] {
    return this.tasks;
  }
  updateTask(positionTask: number, task: string): void {
    this.tasks[positionTask].task = task;
  }
}
