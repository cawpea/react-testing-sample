import { FC, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../../store";
import styles from "./index.module.css";

const id = 0;
const getId = () => id + 1;

export const TodoItemCreator: FC = () => {
  const [value, setValue] = useState<string>("");
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList([
      ...todoList,
      {
        id: getId(),
        label: value,
        isDone: false,
      },
    ]);
    setValue("");
  };

  return (
    <div className={styles.TodoItemCreator}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
