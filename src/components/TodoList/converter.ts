import { PlaceholderTodo, Todo } from "./types";

export const dataToEntity = (data: PlaceholderTodo): Todo => ({
  id: data.id,
  label: data.title,
  isDone: data.completed,
});

export const entityToData = (entity: Todo): PlaceholderTodo => ({
  id: entity.id,
  userId: 0,
  title: entity.label,
  completed: entity.isDone,
});
