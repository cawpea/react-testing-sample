import { atom, selector } from "recoil";
import { Todo } from "./types";
import { fetchTodoList } from "./api";

export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: fetchTodoList(),
});

export const todoSearchState = atom<string>({
  key: "TodoSearch",
  default: "",
});

export const filteredTodoList = selector<Todo[]>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const search = get(todoSearchState);
    const todoList = get(todoListState);

    const filteredTodoList = todoList.filter(
      (todoItem) => todoItem.label.indexOf(search) > -1
    );
    return filteredTodoList;
  },
});
