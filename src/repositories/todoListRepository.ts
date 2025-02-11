import { Tasks } from "../entities/Tasks.js";

export interface TodoListRepository {
  createTask(task: string): void;
  readTasks(): Tasks[];
  updateTask(positionTask: number, task: string): void;
  deleteTask(positionTask: number): void;
}
