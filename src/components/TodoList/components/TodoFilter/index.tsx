import { FC } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { todoQueryState } from "../../store";
import { TodoListQuery } from "components/TodoList/types";

export const TodoFilter: FC = () => {
  const [query, setQuery] = useRecoilState(todoQueryState);

  return (
    <div>
      <label>
        Search:
        <input
          type="text"
          defaultValue={query.label}
          onChange={(e) => setQuery({ ...query, label: e.target.value })}
        />
      </label>
      <RadioGroup
        onChange={(value: TodoListQuery["status"]) =>
          setQuery({ ...query, status: value })
        }
      >
        <Stack direction="row">
          <Radio value="all">All</Radio>
          <Radio value="done">Done</Radio>
          <Radio value="undone">Undone</Radio>
        </Stack>
      </RadioGroup>
    </div>
  );
};
