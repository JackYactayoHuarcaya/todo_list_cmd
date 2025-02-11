import { createInterface } from "readline";
import { routesController } from "./routes/index.js";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
// print personalized message
const print = (d: string) => process.stdout.write(`${d}\n`);

// function to ask the user a question
const promiseQuestion = (question: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    rl.question(`${question}`, (data) => {
      resolve(data.toString().trim());
    });
  });
};

// function to ask the user a option
const optionAction = async (): Promise<string> => {
  const data = await promiseQuestion("Seleccione una opcion: ");
  return data;
};

// function to execute the action
const action = async (option: string): Promise<void> => {
  const opt = parseInt(option);
  switch (opt) {
    case 1:
      const task = await promiseQuestion("Nombre de la Tarea: ");
      routesController.createTask(task);
      break;
    case 2:
      const tasks = routesController.readTask();
      tasks.forEach((task, i) => {
        print(i + " " + task.task + " " + task.taskCreated);
      });
      break;
    case 3:
      const position = parseInt(
        await promiseQuestion("Posicion a actualizar: ")
      );
      const tasksUpdate = routesController.readTask();
      if (tasksUpdate[position]) {
        const updateTask = await promiseQuestion("Nombre de la Tarea: ");
        routesController.updateTask(position, updateTask);
      } else {
        print("Tarea no encontrada");
      }
      break;
    case 4:
      const positionDelete = parseInt(
        await promiseQuestion("Posicion a eliminar: ")
      );
      const tasksDelete = routesController.readTask();
      if (tasksDelete[positionDelete]) {
        routesController.deleteTask(positionDelete);
      } else {
        print("Tarea no encontrada");
      }
      break;
    default:
      print("Opcion no valida");
      break;
  }
};

// create first task .......................................
routesController.createTask("Tarea 1");

const app = async () => {
  // Presentacion
  print("-----------------------------------------");
  print("Este es un programa para gestionar tareas");
  print("-----------------------------------------");
  // Menu de opciones
  print("1. Crear Tarea      | 2. Leer Tareas ");
  print("3. Actualizar Tarea | 4. Eliminar Tarea");
  print("0. Salir");
  print("-----------------------------------------");

  // Selection to option
  const option = await optionAction();
  if (option === "0") {
    process.exit();
  } else {
    await action(option);
    app();
  }
};

app();
