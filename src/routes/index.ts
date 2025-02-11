import { ControllerTask } from "../controller/controllerTask.js";
import { TaskServiceRepository } from "../service/taskServiceRepository.js";
import { CreateTaskUseCase } from "../use_cases/createTaskUseCase.js";
import { DeleteTaskUseCase } from "../use_cases/deleteTaskUsecase.js";
import { ReadTaskUseCase } from "../use_cases/readTaskUseCase.js";
import { UpdateTaskUseCase } from "../use_cases/updateTaskUsecase.js";

const taskServiceRepository = new TaskServiceRepository();
const controllerTask = new ControllerTask(
  new CreateTaskUseCase(taskServiceRepository),
  new DeleteTaskUseCase(taskServiceRepository),
  new ReadTaskUseCase(taskServiceRepository),
  new UpdateTaskUseCase(taskServiceRepository)
);

const routesController = controllerTask;

export { routesController };
