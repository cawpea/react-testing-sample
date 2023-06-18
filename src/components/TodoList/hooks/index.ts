import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { todoListState, filteredTodoListState } from "../store";
import { Todo } from "../types";

type UseTodoList = () => {
  todoList: Todo[];
  setTodoList: SetterOrUpdater<Todo[]>;
};

export const useTodoList: UseTodoList = () => {
  const [, setTodoList] = useRecoilState(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return { todoList, setTodoList };
};
