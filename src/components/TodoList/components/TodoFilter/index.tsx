import { FC } from "react";
import { useRecoilState } from "recoil";
import { todoQueryState } from "../../store";

export const TodoFilter: FC = () => {
  const [query, setQuery] = useRecoilState(todoQueryState);

  return (
    <label className="flex justify-end gap-4 mt-8 mb-2">
      <input
        className="h-8 border rounded-md px-4"
        type="text"
        defaultValue={query.label}
        aria-label="Search Todo"
        placeholder="Search Todo"
        onChange={(e) => setQuery({ ...query, label: e.target.value })}
      />
    </label>
  );
};
