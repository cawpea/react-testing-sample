import { Todo, PlaceholderTodo } from "./types";
import { dataToEntity } from "./converter";

export const fetchTodoList = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const json = (await response.json()) as PlaceholderTodo[];
  const todoList = json.map((data) => dataToEntity(data));
  return todoList;
};
