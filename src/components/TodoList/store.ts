import { atom, selector } from "recoil";
import { fetchTodoList } from "./api";
import { Todo, TodoListQuery } from "./types";

export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: fetchTodoList(),
});

export const todoQueryState = atom<TodoListQuery>({
  key: "TodoSearch",
  default: {
    label: undefined,
  },
});

export const filteredTodoListState = selector<Todo[]>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const query = get(todoQueryState);
    const todoList = get(todoListState);
    let filteredTodoList = todoList;

    if (query.label) {
      filteredTodoList = todoList.filter(
        (todoItem) => todoItem.label.indexOf(query.label!) > -1
      );
    }

    return filteredTodoList;
  },
});
