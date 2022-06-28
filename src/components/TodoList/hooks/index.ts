import { useMemo } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { todoListState } from "../store";
import { Todo, TodoListQuery } from "../types";

type Props = {
  query: TodoListQuery;
};

type UseTodoList = (props?: Props) => {
  todoList: Todo[];
  setTodoList: SetterOrUpdater<Todo[]>;
};

const defaultProps: Props = {
  query: {
    label: undefined,
    isDone: undefined,
  },
};

export const useTodoList: UseTodoList = ({ query } = defaultProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const filteredTodoList = useMemo(() => {
    let _filteredTodoList: Todo[] = todoList;
    if (query) {
      const { label, isDone } = query;
      if (label) {
        _filteredTodoList = _filteredTodoList.filter(
          (todoItem) => todoItem.label.indexOf(label) > -1
        );
      }
      if (isDone) {
        _filteredTodoList = _filteredTodoList.filter(
          (todoItem) => todoItem.isDone === isDone
        );
      }
    }
    return _filteredTodoList;
  }, [todoList, query]);

  return { todoList: filteredTodoList, setTodoList };
};
