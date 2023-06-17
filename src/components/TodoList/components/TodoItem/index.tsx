import { FC } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../store";
import { Todo } from "../../types";
import { replaceItemById } from "utils/array";

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
    <li>
      <label className="flex justify-between py-2">
        <p className="font-medium">{todoItem.label}</p>
        <input
          className="w-4"
          type="checkbox"
          checked={todoItem.isDone}
          onChange={toggleTodo}
        />
      </label>
    </li>
  );
};
