import { FC } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../store";
import { Todo } from "../../types";
import { replaceItemById } from "utils/array";
import styles from "./index.module.css";

type Props = {
  todoItem: Todo;
};

export const TodoItem: FC<Props> = ({ todoItem }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const toggleTodo = () => {
    const newTodoList = replaceItemById(todoList, {
      ...todoItem,
      isDone: !todoItem.isDone,
    });
    setTodoList(newTodoList);
  };

  return (
    <li className={styles.TodoItem}>
      <label>
        <p>{todoItem.label}</p>
        <input
          type="checkbox"
          checked={todoItem.isDone}
          onChange={toggleTodo}
        />
      </label>
    </li>
  );
};
