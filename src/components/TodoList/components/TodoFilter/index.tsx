import { FC } from "react";
import { useRecoilState } from "recoil";
import { todoQueryState } from "../../store";

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
    </div>
  );
};
