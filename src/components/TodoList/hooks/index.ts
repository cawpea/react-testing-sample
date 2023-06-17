import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { todoListState, filteredTodoListState } from "../store";
import { Todo } from "../types";
import { fetchTodoList } from "../api";
import { useEffect } from "react";

type UseTodoList = () => {
  todoList: Todo[];
  setTodoList: SetterOrUpdater<Todo[]>;
};

export const useTodoList: UseTodoList = () => {
  const [, setTodoList] = useRecoilState(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  useEffect(() => {
    fetchTodoList().then((todoList) => setTodoList(todoList));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { todoList, setTodoList };
};
