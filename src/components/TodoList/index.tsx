import { FC } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoList } from "./store";
import { TodoFilter, TodoItem, TodoItemCreator } from "./components";
import styles from "./index.module.css";

export const TodoList: FC = () => {
  const todoList = useRecoilValue(filteredTodoList);

  return (
    <div className={styles.TodoList}>
      <h1>Todo List</h1>
      <div className={styles.TodoItemCreator}>
        <TodoItemCreator />
      </div>
      <div className={styles.TodoFilter}>
        <TodoFilter />
      </div>
      <ul className={styles.TodoListItems}>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </div>
  );
};
