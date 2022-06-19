import { FC } from "react";
import { useRecoilState } from "recoil";
import { todoSearchState } from "../../store";

export const TodoFilter: FC = () => {
  const [searchValue, setSearchValue] = useRecoilState(todoSearchState);

  return (
    <div>
      <label>
        Search:
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
    </div>
  );
};
