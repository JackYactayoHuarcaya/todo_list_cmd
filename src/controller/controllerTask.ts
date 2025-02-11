import { Tasks } from "../entities/Tasks.js";
import { CreateTaskUseCase } from "../use_cases/createTaskUseCase.js";
import { DeleteTaskUseCase } from "../use_cases/deleteTaskUsecase.js";
import { ReadTaskUseCase } from "../use_cases/readTaskUseCase.js";
import { UpdateTaskUseCase } from "../use_cases/updateTaskUsecase.js";

export class ControllerTask {
  constructor(
    private creatTaskUseCase: CreateTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
    private readTaskUseCase: ReadTaskUseCase,
    private updateTaskUseCase: UpdateTaskUseCase
  ) {}

  createTask(task: string): void {
    this.creatTaskUseCase.execute(task);
  }

  readTask(): Tasks[] {
    return this.readTaskUseCase.execute();
  }

  deleteTask(positionTask: number): void {
    this.deleteTaskUseCase.execute(positionTask);
  }

  updateTask(positionTask: number, task: string): void {
    this.updateTaskUseCase.execute(positionTask, task);
  }
}
